import React, { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import LoadingButton from '@mui/lab/LoadingButton';
import { Alert, Avatar, Box, Container, Grid, IconButton, Snackbar, TextField, ThemeProvider, Typography, createTheme, makeStyles } from '@mui/material';

export default function Support(props: any) {

  const content = {
    'header': 'You can reach us at.',
    'description': 'Feel free to contact us with the listed means as you see fit.',
    'contact2': 'Email',
    'contact2-desc': 'founder@feedbacksense.io',
    'contact3': 'Social Media',
    ...props.content
  };

  const [loading, setLoading] = useState(false);
  const [alertType, setAlertType] = useState<'success' | 'error'>('success');
  const [alertMessage, setAlertMessage] = useState<string>('');
  const [showAlert, setShowAlert] = useState(false);
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: any) => {
    try {
      setLoading(true);
      await emailjs.send("service_vl2wgl3", "template_ed76ptf", {
        message: message,
        from_email: email,
        subject: subject,
      }, "bH6HqVjOeZJ_CZakw");
      setShowAlert(true);
      setAlertType('success');
      setAlertMessage('We appreciate your interest! Thank you for reaching out. Expect a response from us within the next 2 days.');
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setAlertMessage('Something went wrong');
      setAlertType('error');
      console.log("🚀 ~ file: Support.tsx:35 ~ handleSubmit ~ error:", error);
    }
  }

  const handleClose = () => {
    setShowAlert(false);
  }

  return (
    <>
      {/* <div 
        className="calendly-inline-widget" 
        data-url="https://calendly.com/feedbacksense/demo?primary_color=006dff"
        style={{minWidth : '320px',height : '700px'}}
      ></div> */}
      <section>
        <ThemeProvider theme={createTheme({ palette: { mode: 'dark' } })} >
          <Box width={'60%'} margin={'auto'} marginTop={'10%'} marginBottom={'10%'} >
            <Snackbar open={showAlert} autoHideDuration={6000} onClose={handleClose}>
              <Alert severity={alertType}>{alertMessage}</Alert>
            </Snackbar>
            <Typography fontSize={40} >Contact Us</Typography>
            <Typography color={'#808080'} >
              Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
            </Typography>
            <Box marginTop={'20px'} marginBottom={'20px'} >
              <TextField onChange={(e) => setEmail(e.target.value)} size='small' fullWidth label="Your email" ></TextField>
            </Box>
            <Box marginBottom={'20px'} >
              <TextField onChange={(e) => setSubject(e.target.value)} size='small' fullWidth label="Subject" ></TextField>
            </Box>
            <Box marginBottom={'20px'} >
              <TextField onChange={(e) => setMessage(e.target.value)} size='small' fullWidth label="Message" multiline ></TextField>
            </Box>
            <Box>
              <LoadingButton
                onClick={handleSubmit}
                variant='outlined'
                loading={loading}
              >
                Submit
              </LoadingButton>
              {/* <button onClick={handleSubmit} className='contained-button' >Submit</button> */}
            </Box>
          </Box>
        </ThemeProvider>

        <Container maxWidth="lg" sx={{ textAlign: 'start', width: '60%', margin: 'auto' }} >
          <Box py={10}>
            <Grid container spacing={6}>
              <Grid item xs={12} md={4} >
                <Typography variant="h6" component="h2" gutterBottom={true}>{content['header']}</Typography>
                <Typography variant="subtitle1" color="#808080" paragraph={true}>{content['description']}</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <div >
                  <Box display="flex">
                    <div>
                      <Avatar >
                        <EmailIcon color="primary" fontSize="small" />
                      </Avatar>
                    </div>
                    <Box ml={2}>
                      <Typography variant="h6" gutterBottom={true}>{content['contact2']}</Typography>
                      <Typography variant="body2" color="#808080">{content['contact2-desc']}</Typography>
                    </Box>
                  </Box>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box display="flex" mb={3}>
                  <div>
                    <Avatar >
                      <WebAssetIcon color="primary" fontSize="small" />
                    </Avatar>
                  </div>
                  <Box ml={2}>
                    <Typography variant="h6" gutterBottom={true}>{content['contact3']}</Typography>
                    <IconButton href="https://www.facebook.com/profile.php?id=100093644569497" color="inherit">
                      <FacebookIcon />
                    </IconButton>
                    <IconButton href="https://twitter.com/Feedback_Sense" color="inherit">
                      <TwitterIcon />
                    </IconButton>
                    <IconButton href="#" color="inherit">
                      <LinkedInIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>
    </>
  );
}