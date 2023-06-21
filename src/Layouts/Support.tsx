import React, { useState } from 'react';

import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import nodemailer from 'nodemailer';
import { Avatar, Box, Container, Grid, IconButton, TextField, ThemeProvider, Typography, createTheme, makeStyles } from '@mui/material';

export default function Support(props : any) {

  // const transporter = nodemailer.createTransport({
  //   // host: 'smtp.ethereal.email',
  //   // port: 587,
  //   // secure: false,
  //   service : 'gmail',
  //   auth: {
  //     user: process.env.REACT_APP_MAIL_SENDER,
  //     pass: process.env.REACT_APP_MAIL_SENDER_PASSWORD,
  //   },
  // });

  const content = {
    'header': 'You can reach us at.',
    'description': 'Feel free to contact us with the listed means as you see fit.',
    'contact1': 'Address',
    'contact1-desc1': 'Mayur talkies road',
    'contact1-desc2': 'Banda India, 210001',
    'contact2': 'Email',
    'contact2-desc': 'founder@feedbacksense.io',
    'contact3': 'Social Media',
    'contact4': 'Phone',
    'contact4-desc': '(+91)7007475550',
    ...props.content
  };

  const [email , setEmail] = useState('');
  const [subject , setSubject] = useState('');
  const [message , setMessage] = useState('');

  const handleSubmit = () => {
    const saveObj = {
      email : email,
      subject : subject,
      message : message
    }
    console.log("🚀 ~ file: Support.tsx:38 ~ handleSubmit ~ saveObj:", saveObj)

    // const options = {
    //   from: 'founder@feedbacksense.io',
    //   to: 'founder@feedbacksense.io',
    //   subject: 'FeedbackSense website contact us filled',
    //   text : JSON.stringify(saveObj)
    // };
    
    // transporter.sendMail(options);
  }

  return (
    <section>
      <ThemeProvider theme={createTheme({palette : {mode : 'dark'}})} >
        <Box width={'60%'} margin={'auto'} marginTop={'10%'} marginBottom={'10%'} >
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
            <button onClick={handleSubmit} className='contained-button' >Submit</button>
          </Box>
        </Box>
      </ThemeProvider>
      <Container maxWidth="lg" sx={{textAlign : 'start',width : '60%',margin : 'auto'}} >
        <Box py={10}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={4} >
              <Typography variant="h6" component="h2" gutterBottom={true}>{content['header']}</Typography>
              <Typography variant="subtitle1" color="#808080" paragraph={true}>{content['description']}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div >
                <Box display="flex" mb={3}>
                  <div>
                    <Avatar >
                      <RoomIcon color="primary" fontSize="small" />
                    </Avatar>
                  </div>
                  <Box ml={2}>
                    <Typography variant="h6" gutterBottom={true}>{content['contact1']}</Typography>
                    <Typography variant="body2" color="#808080">{content['contact1-desc1']}</Typography>
                    <Typography variant="body2" color="#808080">{content['contact1-desc2']}</Typography>
                  </Box>
                </Box>
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
              <Box display="flex">
                <div>
                  <Avatar >
                    <PhoneIcon color="primary" fontSize="small" />
                  </Avatar>
                </div>
                <Box ml={2}>
                  <Typography variant="h6" gutterBottom={true}>{content['contact4']}</Typography>
                  <Typography variant="body2" color="#808080">{content['contact4-desc']}</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}