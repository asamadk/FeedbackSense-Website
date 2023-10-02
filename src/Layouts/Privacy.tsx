import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

function Privacy() {
  return (
    <Box textAlign={'start'} marginTop={'10%'}>
      <Box width={'80%'} margin={'auto'}>
        <Typography fontSize={40}>
          Privacy Policy
        </Typography>
      </Box>
      <Box textAlign={'start'} padding={'20px'} width={'80%'} margin={'auto'}>
        <Typography color={'#808080'} >
          At FeedbackSense, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect the information you provide when using our application.
        </Typography>
        <Box marginTop={'20px'}></Box>
        <Typography variant='h6' color={'#006DFF'} >
          Information Collection
        </Typography>
        <Typography color={'#808080'} >
          We may collect personal information from you when you sign up for an account, create surveys, and use our application. The types of information we may collect include your name, email address, and any other information you choose to provide.
        </Typography>

        <Typography variant='h6' color={'#006DFF'} >
          Use of Information
        </Typography>
        <Typography color={'#808080'} >
          We use the information collected to provide and improve our services, personalize your experience, communicate with you, and analyze survey responses. We may also use your information to send you important updates, notifications, and promotional materials related to our services.
        </Typography>

        <Typography variant='h6' color={'#006DFF'} >
          Information Sharing
        </Typography>
        <Typography color={'#808080'} >
          We do not sell, rent, or lease your personal information to third parties. However, we may share your information with trusted third-party service providers who assist us in operating our application, conducting business activities, or servicing you, as long as they agree to keep the information confidential.
        </Typography>

        <Typography variant='h6' color={'#006DFF'} >
          Data Security
        </Typography>
        <Typography color={'#808080'} >
          We take the security of your personal information seriously and have implemented appropriate technical and organizational measures to protect it against unauthorized access, disclosure, alteration, or destruction. We regularly review and enhance our security practices to ensure the ongoing integrity of your data.
        </Typography>

        <Typography variant='h6' color={'#006DFF'} >
          Data Retention
        </Typography>
        <Typography color={'#808080'} >
          We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, or as required by law. If you no longer wish to use our services, you can request the deletion of your account and associated data.
        </Typography>

        <Typography variant='h6' color={'#006DFF'} >
          Cookies and Tracking Technologies
        </Typography>
        <Typography color={'#808080'} >
          We may use cookies and similar tracking technologies to enhance your experience on our website and application. These technologies help us understand how you interact with our services, improve functionality, and provide personalized content.
        </Typography>

        <Typography variant='h6' color={'#006DFF'} >
          Third-Party Links
        </Typography>
        <Typography color={'#808080'} >
          Our application may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review their privacy policies before providing any personal information.
        </Typography>

        <Typography variant='h6' color={'#006DFF'} >
          Changes to this Privacy Policy
        </Typography>
        <Typography color={'#808080'} >
          We may update this Privacy Policy from time to time. Any changes will be posted on our website, and the revised version will be effective immediately upon posting. We encourage you to review this policy periodically to stay informed about how we collect, use, and protect your information.
        </Typography>

        <Typography variant='h6' color={'#006DFF'} >
          Contact Us
        </Typography>
        <Typography color={'#808080'} >
          If you have any questions, concerns, or requests regarding our Privacy Policy or the handling of your personal information, please contact our support team. We are committed to addressing your inquiries and resolving any issues promptly.
        </Typography>
        <Divider sx={{margin : '20px',bgcolor : '#808080'}} />
        <Typography color={'#808080'} >
          By using FeedbackSense, you acknowledge that you have read and understood this Privacy Policy and agree to the collection, use, and disclosure of your information as described herein.
        </Typography>
      </Box>
    </Box>
  )
}

export default Privacy