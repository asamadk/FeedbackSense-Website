import { Box, Button, Card, CardContent, CardHeader, Container, Grid, Link, MenuItem, Modal, Paper, Select, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, ThemeProvider, Typography, createTheme, duration, makeStyles, useMediaQuery } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import RemoveIcon from '@mui/icons-material/Remove';
import Typewriter from "typewriter-effect";
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import React, { useEffect, useMemo, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { featureList } from '../Utils/PriceConstants';
import axios from 'axios';
import FSLoader from '../Components/FSLoader';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: 'Apercu Pro, sans-serif'
  }
});

export default function Pricing(props: any) {

  const [starterPrice, setStarterPrice] = useState(12);
  const [plusPrice, setPlusPrice] = useState(22);
  const [ultimatePrice, setUltimatePrice] = useState(39);
  const [billing, setBilling] = useState<'month' | 'year'>('year');
  const [showModal, setShowModal] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState<null | string>(null);
  const [currency, setCurrency] = useState<'usd' | 'inr'>('usd');
  const [curSym, setCurSym] = useState<'$' | '₹'>('$');
  const [loading, setLoading] = useState(false);

  const content = {
    'header-p1': 'Simple no-tricks pricing',
    'header-p2': 'turpis non sapien lobortis pretium',
    'description': 'Plan doesn\'t fits your needs? Contact us to discuss customized solutions.',
    'option1': 'Monthly',
    'option2': 'Annual',
    '01_title': 'Starter',
    '01_price': curSym + starterPrice,
    '01_suffix': `/mo (billed ${billing}ly)`,
    '01_benefit1': '3 Active surveys',
    '01_benefit2': '1 User',
    '01_benefit3': '100 Response / month',
    '01_benefit4': 'Basic analysis',
    '01_primary-action': 'Select plan',
    '01_secondary-action': 'Learn more',
    '02_title': 'Plus',
    '02_price': curSym + plusPrice,
    '02_suffix': `/mo (billed ${billing}ly)`,
    '02_benefit1': '5 Active Surveys',
    '02_benefit2': '3 users',
    '02_benefit3': '2000 Response / month',
    '02_benefit4': 'Detailed analysis',
    '02_primary-action': 'Select plan',
    '02_secondary-action': 'Learn more',
    '03_title': 'Business',
    '03_price': curSym + ultimatePrice,
    '03_suffix': `/mo (billed ${billing}ly)`,
    '03_benefit1': '10 Active Surveys',
    '03_benefit2': '10 Users',
    '03_benefit3': '10000 Response / month',
    '03_benefit4': 'AI assisted analysis',
    '03_primary-action': 'Select Plan',
    '03_secondary-action': 'Learn more',
    'free-trial': '7 days free trial',
    ...props.content
  };

  let init = false;

  useEffect(() => {
    if (init === true) { return; }
    init = true;
    fetchUserCountry();
  }, []);

  useMemo(() => {
    if (currency === 'usd') {
      setCurSym('$');
      if (billing === 'year') {
        setStarterPrice(12);
        setPlusPrice(22);
        setUltimatePrice(39);
      } else {
        setStarterPrice(16);
        setPlusPrice(26);
        setUltimatePrice(45);
      }
    } else {
      setCurSym('₹');
      if (billing === 'year') {
        setStarterPrice(499);
        setPlusPrice(999);
        setUltimatePrice(1799);
      } else {
        setStarterPrice(699);
        setPlusPrice(1199);
        setUltimatePrice(1999);
      }
    }
  }, [currency, billing]);

  const fetchUserCountry = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('https://ipapi.co/json/');
      setLoading(false);
      const countryCode = data?.country_code;
      if (countryCode === 'IN') {
        setCurrency('inr')
      } else {
        setCurrency('usd');
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }

  const handleChange = (event: any) => {
    if (event.target.checked === true) {
      setBilling('year');
    } else {
      setBilling('month');
    }
  };

  const handleRouteToApp = (price: string) => {
    setSelectedPrice(price);
    setShowModal(true);
  }

  const handleModalClose = () => {
    setShowModal(false);
  }

  const handleCurrencyChange = (event: any) => {
    setCurrency(event.target.value);
  }

  return (
    <section>
      <Container maxWidth="lg">
        <Box py={8} textAlign="center">
          <Box mt={5} mb={3} >
            <Container maxWidth="sm">
              <Typography variant="h3" component="h2" gutterBottom={true}>
                <Typography variant="h3" component="span" color="#006dff">{content['header-p1']} </Typography>
                <Box sx={{ fontSize: '30px', color: '#006b38ff' }} >
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("")
                        .pauseFor(500)
                        .deleteAll()
                        .typeString(content['free-trial'])
                        .start()
                    }}
                  />
                </Box>
              </Typography>
              <Typography
                sx={{ color: '#808080' }}
                variant="subtitle1"
                color="textSecondary"
                paragraph={true}
              >
                {content['description']}
              </Typography>
              <Typography
                sx={{ color: '#f1f1f1' }}
                variant="subtitle1"
                paragraph={true}
              >
                or explore our offerings with our  
                <a style={{color : '#f1f1f1',fontWeight : 700,marginLeft : '5px'}} href='https://app.feedbacksense.io/' > Free plan</a>
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }} >
                <div>
                  <Typography variant="subtitle1" component="span">{content['option1']}</Typography>
                  &nbsp; <Switch name="checkbox" color="primary" checked={billing === 'year'} onChange={handleChange} /> &nbsp;
                  <Typography variant="subtitle1" component="span">{content['option2']}</Typography>
                </div>
                <div>
                  <ThemeProvider theme={darkTheme} >
                    <label style={{ marginRight: '10px' }} >Currency</label>
                    <Select
                      sx={{ width: '100px' }}
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      size='small'
                      value={currency}
                      onChange={handleCurrencyChange}
                    >
                      <MenuItem value={'usd'}>USD</MenuItem>
                      <MenuItem value={'inr'}>INR</MenuItem>
                    </Select>
                  </ThemeProvider>
                </div>
              </Box>
            </Container>
          </Box>
          <Grid container spacing={3} >
            <Grid item xs={12} md={4}>
              <Card sx={{ backgroundColor: '#081213', color: 'white', border: '1px #808080 solid' }} variant="outlined">
                <CardHeader title={content['01_title']} ></CardHeader>
                <CardContent>
                  <Box px={1} mb={5} >
                    <Typography color={'#006dff'} variant="h3" component="h2" gutterBottom={true}>
                      {content['01_price']}
                      <Typography variant="h6" component="span">{content['01_suffix']}</Typography>
                    </Typography>
                    <Typography color={'#808080'} variant="subtitle1" component="p">{content['01_benefit1']}</Typography>
                    <Typography color={'#808080'} variant="subtitle1" component="p">{content['01_benefit2']}</Typography>
                    <Typography color={'#808080'} variant="subtitle1" component="p">{content['01_benefit3']}</Typography>
                    <Typography color={'#808080'} variant="subtitle1" component="p" paragraph={true}>{content['01_benefit4']}</Typography>
                  </Box>
                  <Button onClick={() => handleRouteToApp(content['01_price'])} variant="outlined" color="primary" >{content['01_primary-action']}</Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ backgroundColor: '#081213', color: 'white', border: '1px #808080 solid' }} variant="outlined">
                <CardHeader title={content['02_title']} ></CardHeader>
                <CardContent>
                  <Box px={1} mb={5} >
                    <Typography color={'#006dff'} variant="h3" component="h2" gutterBottom={true}>
                      {content['02_price']}
                      <Typography variant="h6" component="span">{content['02_suffix']}</Typography>
                    </Typography>
                    <Typography color={'#808080'} variant="subtitle1" component="p">{content['02_benefit1']}</Typography>
                    <Typography color={'#808080'} variant="subtitle1" component="p">{content['02_benefit2']}</Typography>
                    <Typography color={'#808080'} variant="subtitle1" component="p">{content['02_benefit3']}</Typography>
                    <Typography color={'#808080'} variant="subtitle1" component="p" paragraph={true}>{content['02_benefit4']}</Typography>
                  </Box>
                  <Button onClick={() => handleRouteToApp(content['02_price'])} variant="contained" color="info">{content['02_primary-action']}</Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ backgroundColor: '#081213', color: 'white', border: '1px #808080 solid' }} variant="outlined">
                <CardHeader title={content['03_title']} ></CardHeader>
                <CardContent>
                  <Box px={1} mb={5} >
                    <Typography variant="h3" color={'#006dff'} component="h2" gutterBottom={true}>
                      {content['03_price']}
                      <Typography variant="h6" component="span">{content['03_suffix']}</Typography>
                    </Typography>
                    <Typography color={'#808080'} variant="subtitle1" component="p">{content['03_benefit1']}</Typography>
                    <Typography color={'#808080'} variant="subtitle1" component="p">{content['03_benefit2']}</Typography>
                    <Typography color={'#808080'} variant="subtitle1" component="p">{content['03_benefit3']}</Typography>
                    <Typography color={'#808080'} variant="subtitle1" component="p" paragraph={true}>{content['03_benefit4']}</Typography>
                  </Box>
                  <Button onClick={() => handleRouteToApp(content['03_price'])} variant="outlined" color="primary">{content['03_primary-action']}</Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <ThemeProvider theme={darkTheme} >
        <Box margin={'20px'} >
          <PlanDetailsTable
            curSym={curSym}
            plus={plusPrice}
            starter={starterPrice}
            ultimate={ultimatePrice}
            billing={billing}
          />
        </Box>
      </ThemeProvider>
      <EmailModal currency={currency} price={selectedPrice} open={showModal} close={handleModalClose} />
      <FSLoader show={loading} />
    </section>
  );
}

function EmailModal(props: any) {

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width: 830px)');

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isSmallScreen === true ? '75%' : '40%',
    bgcolor: '#1e1e1e',
    boxShadow: 24,
    p: 4,
  };

  const handlePricingClick = async () => {
    if (email == null || email.length < 1) { return; }
    setLoading(true);
    const message = `Email : ${email} Selected Price ${props.price} using currency ${props.currency}`;
    await emailjs.send("service_vl2wgl3", "template_ed76ptf", {
      message: message,
      from_email: 'founder@feedbacksense.io',
      subject: 'Someone reviewed pricing. ',
    }, "bH6HqVjOeZJ_CZakw");
    setLoading(false);
    props.close();
    window.open('https://app.feedbacksense.io');
  }

  return (
    <Modal
      open={props.open}
      onClose={props.close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} >
        <Typography id="modal-modal-title" variant="h4" >
          Please provide your email
        </Typography>
        <Box>
          <ThemeProvider theme={darkTheme} >
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              sx={{ marginTop: '10px' }}
              size='small'
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
          </ThemeProvider>
          <Box margin={'10px'} width={'100%'} textAlign={'center'} >
            <LoadingButton loading={loading} onClick={handlePricingClick} variant="outlined" color="primary">Next</LoadingButton>
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}

function PlanDetailsTable({ starter, ultimate, plus, billing, curSym }: any) {
  return (
    <TableContainer style={{ backgroundColor: '#081213' }} component={Paper}>
      <Table aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell>Pricing</TableCell>
            <TableCell>{curSym}{starter} /mo (billed {billing}ly)</TableCell>
            <TableCell>{curSym}{plus} /mo (billed {billing}ly)</TableCell>
            <TableCell>{curSym}{ultimate} /mo (billed {billing}ly)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            featureList.map((feature, index) => {
              return (
                <TableRow sx={{ backgroundColor: index % 2 === 0 ? '#000000' : '#081213' }} key={feature.name} >
                  <TableCell>{feature.name}</TableCell>
                  <TableCell>
                    {feature.starter === 'yes' && <CheckIcon sx={{ color: '#006DFF' }} />}
                    {feature.starter === 'no' && <RemoveIcon />}
                    {feature.starter !== 'yes' && feature.starter !== 'no' && feature.starter}
                  </TableCell>
                  <TableCell>
                    {feature.plus === 'yes' && <CheckIcon sx={{ color: '#006DFF' }} />}
                    {feature.plus === 'no' && <RemoveIcon />}
                    {feature.plus !== 'yes' && feature.plus !== 'no' && feature.plus}
                  </TableCell>
                  <TableCell>
                    {feature.business === 'yes' && <CheckIcon sx={{ color: '#006DFF' }} />}
                    {feature.business === 'no' && <RemoveIcon />}
                    {feature.business !== 'yes' && feature.business !== 'no' && feature.business}
                  </TableCell>
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}