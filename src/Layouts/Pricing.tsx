import { Box, Button, Card, CardContent, CardHeader, Container, Grid, Link, Paper, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, ThemeProvider, Typography, createTheme, makeStyles } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import RemoveIcon from '@mui/icons-material/Remove';
import React, { useState } from 'react';


export default function Pricing(props: any) {

  const [starterPrice, setStarterPrice] = useState(25);
  const [ultimatePrice, setUltimatePrice] = useState(49);
  const [billing, setBilling] = useState<'month' | 'year'>('year');

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
    typography: {
      fontFamily: 'Apercu Pro, sans-serif'
    }
  });

  const content = {
    'header-p1': 'Simple no-tricks pricing',
    'header-p2': 'turpis non sapien lobortis pretium',
    'description': 'Plan doesn\'t fits your needs? Contact us to discuss customized solutions.',
    'option1': 'Monthly',
    'option2': 'Annual',
    '01_title': 'FeedbackSense Free',
    '01_price': '$0',
    '01_suffix': ' / '+billing,
    '01_benefit1': '1 Active survey',
    '01_benefit2': '1 User',
    '01_benefit3': '50 Response / month',
    '01_benefit4': 'Basic analysis',
    '01_primary-action': 'Select plan',
    '01_secondary-action': 'Learn more',
    '02_title': 'FeedbackSense Starter',
    '02_price': '$' + starterPrice,
    '02_suffix': ' / '+billing,
    '02_benefit1': '5 Active Surveys',
    '02_benefit2': 'Unlimited users',
    '02_benefit3': '2000 Response / month',
    '02_benefit4': 'Detailed analysis',
    '02_primary-action': 'Select plan',
    '02_secondary-action': 'Learn more',
    '03_title': 'FeedbackSense Ultimate',
    '03_price': '$' + ultimatePrice,
    '03_suffix': ' / '+billing,
    '03_benefit1': '10 Active Surveys',
    '03_benefit2': 'User management panel',
    '03_benefit3': '5000 Response / month',
    '03_benefit4': 'AI assisted analysis',
    '03_primary-action': 'Coming soong',
    '03_secondary-action': 'Learn more',
    ...props.content
  };

  const handleChange = (event: any) => {
    if (event.target.checked === true) {
      setBilling('year');
      setStarterPrice(25);
      setUltimatePrice(49);
    } else {
      setBilling('month');
      setStarterPrice(29);
      setUltimatePrice(55);
    }
  };


  const handleRouteToApp = () => {
    window.open('https://app.feedbacksense.io');
  }

  return (
    <section>
      <Container maxWidth="lg">
        <Box py={8} textAlign="center">
          <Box mb={3}>
            <Container maxWidth="sm">
              <Typography variant="h3" component="h2" gutterBottom={true}>
                <Typography variant="h3" component="span" color="primary">{content['header-p1']} </Typography>
              </Typography>
              <Typography sx={{ color: '#808080' }} variant="subtitle1" color="textSecondary" paragraph={true}>{content['description']}</Typography>

              <div>
                <Typography variant="subtitle1" component="span">{content['option1']}</Typography>
                &nbsp; <Switch name="checkbox" color="primary" checked={billing === 'year'} onChange={handleChange} /> &nbsp;
                <Typography variant="subtitle1" component="span">{content['option2']}</Typography>
              </div>
            </Container>
          </Box>
          <Grid container spacing={3} >
            <Grid item xs={12} md={4}>
              <Card sx={{ backgroundColor: '#1e1e1e', color: 'white', border: '1px #808080 solid' }} variant="outlined">
                <CardHeader title={content['01_title']} ></CardHeader>
                <CardContent>
                  <Box px={1}>
                    <Typography variant="h3" component="h2" gutterBottom={true}>
                      {content['01_price']}
                      <Typography variant="h6" component="span">{content['01_suffix']}</Typography>
                    </Typography>
                    <Typography variant="subtitle1" component="p">{content['01_benefit1']}</Typography>
                    <Typography variant="subtitle1" component="p">{content['01_benefit2']}</Typography>
                    <Typography variant="subtitle1" component="p">{content['01_benefit3']}</Typography>
                    <Typography variant="subtitle1" component="p" paragraph={true}>{content['01_benefit4']}</Typography>
                  </Box>
                  <Button onClick={handleRouteToApp} variant="outlined" color="primary" >{content['01_primary-action']}</Button>
                  <Box mt={2}>
                    <Link href="#" color="primary">{content['03_secondary-action']}</Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ backgroundColor: '#006DFF', color: 'white', border: '1px #006DFF solid' }} variant="outlined">
                <CardHeader title={content['02_title']} ></CardHeader>
                <CardContent>
                  <Box px={1}>
                    <Typography variant="h3" component="h2" gutterBottom={true}>
                      {content['02_price']}
                      <Typography variant="h6" component="span">{content['02_suffix']}</Typography>
                    </Typography>
                    <Typography variant="subtitle1" component="p">{content['02_benefit1']}</Typography>
                    <Typography variant="subtitle1" component="p">{content['02_benefit2']}</Typography>
                    <Typography variant="subtitle1" component="p">{content['02_benefit3']}</Typography>
                    <Typography variant="subtitle1" component="p" paragraph={true}>{content['02_benefit4']}</Typography>
                  </Box>
                  <Button onClick={handleRouteToApp} variant="contained" color="info">{content['02_primary-action']}</Button>
                  <Box mt={2}>
                    <Link href="#" color="#fffff">{content['03_secondary-action']}</Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ backgroundColor: '#1e1e1e', color: 'white', border: '1px #808080 solid' }} variant="outlined">
                <CardHeader title={content['03_title']} ></CardHeader>
                <CardContent>
                  <Box px={1}>
                    <Typography variant="h3" component="h2" gutterBottom={true}>
                      {content['03_price']}
                      <Typography variant="h6" component="span">{content['03_suffix']}</Typography>
                    </Typography>
                    <Typography variant="subtitle1" component="p">{content['03_benefit1']}</Typography>
                    <Typography variant="subtitle1" component="p">{content['03_benefit2']}</Typography>
                    <Typography variant="subtitle1" component="p">{content['03_benefit3']}</Typography>
                    <Typography variant="subtitle1" component="p" paragraph={true}>{content['03_benefit4']}</Typography>
                  </Box>
                  <Button variant="outlined" color="primary">{content['03_primary-action']}</Button>
                  <Box mt={2}>
                    <Link href="#" color="primary">{content['03_secondary-action']}</Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <ThemeProvider theme={darkTheme} >
        <Box margin={'20px'} >
          <PlanDetailsTable 
            starter={starterPrice}
            ultimate={ultimatePrice}
          />
        </Box>
      </ThemeProvider>
    </section>
  );
}

function PlanDetailsTable({ starter, ultimate }: any) {
  return (
    <TableContainer style={{ margin: '35px' }} component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Feature</TableCell>
                        <TableCell>Free $0 /year</TableCell>
                        <TableCell>Starter ${starter} /year</TableCell>
                        <TableCell>Growth ${ultimate} /year</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Active surveys</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>5</TableCell>
                        <TableCell>10</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Users</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>Unlimited</TableCell>
                        <TableCell>Unlimited</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Response capacity / survey</TableCell>
                        <TableCell>50</TableCell>
                        <TableCell>2000</TableCell>
                        <TableCell>5000</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Response store limit</TableCell>
                        <TableCell>50</TableCell>
                        <TableCell>2000</TableCell>
                        <TableCell>5000</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Folders</TableCell>
                        <TableCell><RemoveIcon /></TableCell>
                        <TableCell><CheckIcon sx={{ color: '#006DFF' }} /></TableCell>
                        <TableCell><CheckIcon sx={{ color: '#006DFF' }} /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Personalized assistance</TableCell>
                        <TableCell><RemoveIcon /></TableCell>
                        <TableCell><CheckIcon sx={{ color: '#006DFF' }} /></TableCell>
                        <TableCell><CheckIcon sx={{ color: '#006DFF' }} /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>FeedbackSense  Branding</TableCell>
                        <TableCell><RemoveIcon /></TableCell>
                        <TableCell><RemoveIcon /></TableCell>
                        <TableCell><CheckIcon sx={{ color: '#006DFF' }} /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Questions in survey</TableCell>
                        <TableCell>Unlimited</TableCell>
                        <TableCell>Unlimited</TableCell>
                        <TableCell>Unlimited</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Detailed analysis</TableCell>
                        <TableCell><RemoveIcon /></TableCell>
                        <TableCell><CheckIcon sx={{ color: '#006DFF' }} /></TableCell>
                        <TableCell><CheckIcon sx={{ color: '#006DFF' }} /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>AI analysis</TableCell>
                        <TableCell><RemoveIcon /></TableCell>
                        <TableCell><RemoveIcon /></TableCell>
                        <TableCell><CheckIcon sx={{ color: '#006DFF' }} /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Collection time / survey</TableCell>
                        <TableCell>Unlimited</TableCell>
                        <TableCell>Unlimited</TableCell>
                        <TableCell>Unlimited</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Notifications</TableCell>
                        <TableCell><RemoveIcon /></TableCell>
                        <TableCell><CheckIcon sx={{ color: '#006DFF' }} /></TableCell>
                        <TableCell><CheckIcon sx={{ color: '#006DFF' }} /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Email support</TableCell>
                        <TableCell><RemoveIcon /></TableCell>
                        <TableCell><CheckIcon sx={{ color: '#006DFF' }} /></TableCell>
                        <TableCell><CheckIcon sx={{ color: '#006DFF' }} /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Exclusive Features</TableCell>
                        <TableCell><RemoveIcon /></TableCell>
                        <TableCell><CheckIcon sx={{ color: '#006DFF' }} /></TableCell>
                        <TableCell><CheckIcon sx={{ color: '#006DFF' }} /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Result export</TableCell>
                        <TableCell><RemoveIcon /></TableCell>
                        <TableCell>Coming soon</TableCell>
                        <TableCell>Coming soon</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Custom logo</TableCell>
                        <TableCell><RemoveIcon /></TableCell>
                        <TableCell>Coming soon</TableCell>
                        <TableCell>Coming soon</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
  )
}