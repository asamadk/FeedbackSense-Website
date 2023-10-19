import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import LoadingButton from '@mui/lab/LoadingButton';
import { Alert, Box, Snackbar, TextField, ThemeProvider, Typography, createTheme, makeStyles } from '@mui/material';

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
    if (message.length < 1 || email.length < 1 || email.length < 1) {
      setShowAlert(true);
      setAlertType('error');
      setAlertMessage('Please provide all the details.');
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
      return;
    }
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
      <script src="https://desk.zoho.in/portal/api/feedbackwidget/127804000000182282?orgId=60024635560&displayType=embeded"></script>
      <div id="zsfeedbackwidgetdiv"></div>
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
      </section>
    </>
  );
}