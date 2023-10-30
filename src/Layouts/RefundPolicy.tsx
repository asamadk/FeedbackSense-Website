import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

function RefundPolicy() {
    return (
        <Box textAlign={'start'} marginTop={'10%'}>
            <Box width={'80%'} margin={'auto'}>
                <Typography fontSize={40}>
                    Cancellation and Refund Policy for FeedbackSense
                </Typography>
            </Box>
            <Box textAlign={'start'} padding={'20px'} width={'80%'} margin={'auto'}>
                <Typography color={'#808080'} >
                    Thank you for choosing FeedbackSense. Please read our Cancellation and Refund Policy carefully to ensure you are fully informed.
                </Typography>
                <Box marginTop={'20px'}></Box>
                <Typography variant='h6' color={'#006DFF'} >
                    1. Return and Exchange Window
                </Typography>
                <Typography color={'#808080'} >
                    Customers have the right to refund any product/service they purchased within 15 days from the purchase date.
                    <ul></ul>
                </Typography>

                <Typography variant='h6' color={'#006DFF'} >
                    2. Initiating a Refund
                </Typography>
                <Typography color={'#808080'} >
                    To initiate a refund:
                    <ul>
                        <li>Please contact us at founder@feedbacksense.io</li>
                        <li>Provide your order number, and clearly state your reason for refund.</li>
                        <li>Wait for a confirmation email with further instructions on the refund.</li>
                    </ul>
                </Typography>

                <Typography variant='h6' color={'#006DFF'} >
                    3. Refund Processing Time
                </Typography>
                <Typography color={'#808080'} >
                    Once your return/exchange request has been approved and processed, 
                    the refund will be issued within 15 days. 
                    The refund will be credited to the original payment method used during the purchase.
                    <ul></ul>
                </Typography>

                <Typography variant='h6' color={'#006DFF'} >
                    4. Conditions for Returns
                </Typography>
                <Typography color={'#808080'} >
                    <ul>
                        <li>Refunds will be approved only if there's a significant defect or issue with the software that our technical team cannot resolve.</li>
                        <li>Customers who have not activated the software are eligible for a refund.</li>
                        <li>If the software has been activated, or used beyond initial setup, it may not qualify for a refund unless there are technical issues that prevent its functioning.</li>
                    </ul>
                </Typography>

                <Typography variant='h6' color={'#006DFF'} >
                    5. Exceptions
                </Typography>
                <Typography color={'#808080'} >
                    Refund requests made after the 15-day window will not be processed.
                    However, we will do our utmost to ensure your issues or concerns are addressed.
                    <ul></ul>
                </Typography>
                <Typography variant='h6' color={'#006DFF'} >
                    6. Changes to This Policy
                </Typography>
                <Typography color={'#808080'} >
                    Feedback Software reserves the right to modify this Refund Policy at any time. 
                    Please review it occasionally. Your continued use of our website or software after the Refund Policy has been updated 
                    implies your acceptance of the revised terms.
                    <ul></ul>
                </Typography>
                <Typography variant='h6' color={'#006DFF'} >
                    Contact Us
                </Typography>
                <Typography color={'#808080'} >
                    If you have any questions, concerns, or requests regarding our Refund Policy or the 
                    handling of your personal information, please contact our support team. 
                    We are committed to addressing your inquiries and resolving any issues promptly.
                </Typography>
            </Box>
        </Box>
    )
}

export default RefundPolicy