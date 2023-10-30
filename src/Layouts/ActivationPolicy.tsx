import { Box, Typography } from '@mui/material'
import React from 'react'

function ActivationPolicy() {
  return (
    <Box textAlign={'start'} marginTop={'10%'}>
            <Box width={'80%'} margin={'auto'}>
                <Typography fontSize={40}>
                    Delivery and Activation Policy for FeedbackSense
                </Typography>
            </Box>
            <Box textAlign={'start'} padding={'20px'} width={'80%'} margin={'auto'}>
                <Typography color={'#808080'} >
                    Thank you for choosing FeedbackSense. 
                    We understand that access to the software you've purchased is essential. 
                    Therefore, this policy aims to clarify the delivery and activation process of our cloud software.
                </Typography>
                <Box marginTop={'20px'}></Box>
                <Typography variant='h6' color={'#006DFF'} >
                    1. Software Delivery
                </Typography>
                <Typography color={'#808080'} >
                    <ul>
                        <li>
                        Instant Access: Upon successful payment, you will receive an email with a link to access our cloud software platform. 
                        This email will typically arrive within a few minutes of your purchase.
                        </li>
                        <li>
                        Account Setup: If you're a new user, you'll be guided through a registration process to
                        set up your account. If you're an existing user, simply log in to access the latest features.
                        </li>
                    </ul>
                </Typography>

                <Typography variant='h6' color={'#006DFF'} >
                    2. Activation Process
                </Typography>
                <Typography color={'#808080'} >
                    <ul>
                        <li>
                            Activation Link: In the email you receive post-purchase, 
                            there will be an activation link. Clicking on this link will either 
                            activate your subscription or provide further instructions.
                        </li>
                    </ul>
                </Typography>

                <Typography variant='h6' color={'#006DFF'} >
                    3. Costs
                </Typography>
                <Typography color={'#808080'} >
                    There are no additional costs for software delivery or activation. 
                    The price you see during the purchase process is inclusive of all charges.
                    <ul></ul>
                </Typography>

                <Typography variant='h6' color={'#006DFF'} >
                    4. International Users
                </Typography>
                <Typography color={'#808080'} >
                    Our cloud software is available to users worldwide. 
                    The delivery and activation process remains the same regardless of your geographic location.
                    <ul></ul>
                </Typography>

                <Typography variant='h6' color={'#006DFF'} >
                    5. Assistance
                </Typography>
                <Typography color={'#808080'} >
                    If you encounter any issues during the delivery or activation process, 
                    please reach out to our support team at founder@feedbacksense.io. We aim to respond and resolve all queries within 24-48 hours.
                    <ul></ul>
                </Typography>
                <Typography variant='h6' color={'#006DFF'} >
                    6. Changes to This Policy
                </Typography>
                <Typography color={'#808080'} >
                    Feedback Software reserves the right to modify this Activation Policy at any time. 
                    Please review it occasionally. Your continued use of our website or software after the Activation Policy has been updated 
                    implies your acceptance of the revised terms.
                    <ul></ul>
                </Typography>
                <Typography variant='h6' color={'#006DFF'} >
                    Contact Us
                </Typography>
                <Typography color={'#808080'} >
                    If you have any questions, concerns, or requests regarding our Activation Policy or the 
                    handling of your personal information, please contact our support team. 
                    We are committed to addressing your inquiries and resolving any issues promptly.
                </Typography>
            </Box>
        </Box>
  )
}

export default ActivationPolicy