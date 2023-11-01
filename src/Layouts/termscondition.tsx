import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import { SUPPORT_MAIL } from '../Utils/FAQConstants'

function Termscondition() {
    return (
        <Box textAlign={'start'} marginTop={'10%'}>
            <Box width={'80%'} margin={'auto'}>
                <Typography fontSize={40}>
                    Terms and Conditions
                </Typography>
            </Box>
            <Box textAlign={'start'} padding={'20px'} width={'80%'} margin={'auto'}>
                <Typography color={'#808080'} >
                    Thank you for choosing FeedbackSense. Please read these Terms and Conditions ("Terms") carefully as they govern your use of our software and services.
                </Typography>
                <Box marginTop={'20px'}></Box>
                <Typography variant='h6' color={'#006DFF'} >
                    1. Contact Information
                </Typography>
                <Typography color={'#808080'} >
                    <ul>
                        <li>Address : Bangalore , India</li>
                        <li>Email : {SUPPORT_MAIL} </li>
                        <li>Phone : 7007475550</li>
                    </ul>
                </Typography>

                <Typography variant='h6' color={'#006DFF'} >
                    2. Effective Date for Policy
                </Typography>
                <Typography color={'#808080'} >
                    These Terms are effective as of
                    {new Date().toUTCString()}
                    and will remain in effect until modified, amended, or terminated by FeedbackSense.
                    <ul>
                    </ul>
                </Typography>

                <Typography variant='h6' color={'#006DFF'} >
                    3. Limitation of Liability and Disclaimer of Warranties
                </Typography>
                <Typography color={'#808080'} >
                    While we strive to provide a high-quality service,
                    FeedbackSense and all related services are provided "AS IS."
                    We make no warranties, express or implied, concerning the performance, accuracy, or reliability of our software.
                    <ul></ul>
                </Typography>

                <Typography variant='h6' color={'#006DFF'} >
                    4. Rules of Conduct
                </Typography>
                <Typography color={'#808080'} >
                    Users agree to:
                    <ul>
                        <li>Use our software and services for lawful purposes only.</li>
                        <li>Not engage in any activity that disrupts, diminishes the quality of, or impairs the performance of our software.</li>
                        <li>Comply with all local, state, national, and international laws and regulations while using our software.</li>
                    </ul>
                </Typography>

                <Typography variant='h6' color={'#006DFF'} >
                    5. User Restrictions
                </Typography>
                <Typography color={'#808080'} >
                    You are prohibited from:
                    <ul>
                        <li>
                            Reproducing, duplicating, copying, selling, or reselling any part of our software without explicit permission.
                        </li>
                        <li>Attempting to decipher, decompile, or reverse engineer any part of the software.</li>
                        <li>Exploiting the software in any unauthorized way.</li>
                    </ul>
                    Violation of any of these restrictions may result in immediate termination of your account and legal action.
                    <ul></ul>
                </Typography>
                <Typography variant='h6' color={'#006DFF'} >
                    6. Changes to These Terms
                </Typography>
                <Typography color={'#808080'} >
                    FeedbackSense reserves the right to update or modify these Terms at any time without prior notice. 
                    It's your responsibility to review these Terms periodically. 
                    Your continued use of our software following the update of these Terms indicates your acceptance of the changes.
                    <ul></ul>
                </Typography>
                <Typography variant='h6' color={'#006DFF'} >
                    7. Contact Us
                </Typography>
                <Typography color={'#808080'} >
                If you have any questions regarding these Terms, please reach out to us at the contact information provided above
                </Typography>
            </Box>
        </Box>
    )
}

export default Termscondition