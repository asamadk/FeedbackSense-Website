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
          1. Information We Collect
        </Typography>
        <Typography color={'#808080'} >
          When you visit our website or use our software, we may collect the following personal information from you:
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Contact number</li>
            <li>Any feedback or comments you provide via our platform</li>
          </ul>
        </Typography>

        <Typography variant='h6' color={'#006DFF'} >
          2. How We Collect Information
        </Typography>
        <Typography color={'#808080'} >
          We collect information directly from you when you:
          <ul>
            <li>Sign up for an account</li>
            <li>Provide feedback or fill out forms on our website</li>
            <li>Contact our customer support</li>
          </ul>
          Additionally, we use cookies and similar technologies to enhance your user experience and gather data on how you interact with our website and software.
          <ul></ul>
        </Typography>

        <Typography variant='h6' color={'#006DFF'} >
          3. How We Use Collected Information
        </Typography>
        <Typography color={'#808080'} >
          Your personal information is used for:
          <ul>
            <li>Account setup and management</li>
            <li>Responding to your queries or feedback</li>
            <li>Sending updates or relevant information about our software</li>
            <li>Enhancing our software and customizing your experience</li>
            <li>Analyzing usage to better understand our users and improve our offerings</li>
          </ul>
        </Typography>

        <Typography variant='h6' color={'#006DFF'} >
          4. Protecting Your Information
        </Typography>
        <Typography color={'#808080'} >
          We prioritize the safety of your personal information:
          <ul>
            <li>We employ industry-standard encryption techniques for safeguarding your data.</li>
            <li>We periodically review our data collection and storage practices to guard against unauthorized access.</li>
            <li>We do not store sensitive personal information like credit card numbers.</li>
          </ul>
        </Typography>

        <Typography variant='h6' color={'#006DFF'} >
          5. Sharing Your Information
        </Typography>
        <Typography color={'#808080'} >
          We do not sell or trade your personal data. However:
          <ul>
            <li>We may share your information with third parties who provide services on our behalf, such as email hosting or server hosting. These third parties are prohibited from using your data for any purpose other than to provide the services requested by us.</li>
            <li>We may disclose your information if required by law or in response to legal processes.</li>
          </ul>
        </Typography>
        <Typography variant='h6' color={'#006DFF'} >
          6. Changes to This Policy
        </Typography>
        <Typography color={'#808080'} >
          Feedback Software reserves the right to modify this Privacy Policy at any time. Please review it occasionally. Your continued use of our website or software after the Privacy Policy has been updated implies your acceptance of the revised terms.
          <ul></ul>
        </Typography>
        <Typography variant='h6' color={'#006DFF'} >
          Contact Us
        </Typography>
        <Typography color={'#808080'} >
          If you have any questions, concerns, or requests regarding our Privacy Policy or the handling of your personal information, please contact our support team. We are committed to addressing your inquiries and resolving any issues promptly.
        </Typography>
        <Divider sx={{ margin: '20px', bgcolor: '#808080' }} />
        <Typography color={'#808080'} >
          By using FeedbackSense, you acknowledge that you have read and understood this Privacy Policy and agree to the collection, use, and disclosure of your information as described herein.
        </Typography>
      </Box>
    </Box>
  )
}

export default Privacy