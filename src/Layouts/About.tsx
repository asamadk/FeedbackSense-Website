import { Box, Typography } from '@mui/material'
import React from 'react'

function About() {
  return (
    <Box textAlign={'start'} marginTop={'10%'}>
      <Box width={'80%'} margin={'auto'}>
        <Typography fontSize={40}>
          Welcome to FeedbackSense!
        </Typography>
      </Box>
      <Box textAlign={'start'} padding={'20px'} width={'80%'} margin={'auto'}>
        <Typography color={'#808080'} >FeedbackSense is a powerful feedback collection and analysis application designed to help you gather valuable insights from your customers, employees, or any target audience. With FeedbackSense, you can create and distribute surveys, collect and analyze responses, and gain actionable insights to improve your products, services, and overall customer experience.
        </Typography>
        <Typography color={'#808080'} >

          Our user-friendly interface allows you to effortlessly create customized surveys with various question types, including multiple choice, open-ended, rating scales, and more. You can tailor your surveys to different purposes such as website feedback, chat surveys, research surveys, or review surveys, ensuring you capture the feedback you need.
        </Typography>
        <Typography color={'#808080'} >

          With a wide range of customizable themes and templates, you can create visually appealing surveys that align with your brand identity. Our branch logic feature enables you to create dynamic surveys that adapt based on respondents' answers, providing a personalized and engaging survey experience.
         </Typography>
          <Typography color={'#808080'} >

          FeedbackSense integrates seamlessly with popular CRM systems like Salesforce and HubSpot, allowing you to sync survey responses and data with your existing customer records. You can analyze survey results using our built-in analytics features, including device type filters, word cloud analysis, and sentiment analysis, providing valuable insights into customer sentiments and trends.
          </Typography>
          <Typography color={'#808080'} >
          Collaborate with your team members using FeedbackSense's team collaboration feature, enabling you to work together on survey creation, review responses, and share insights. The admin dashboard and user management functionality give you full control over user accounts, permissions, and survey settings.
          </Typography>
          <Typography color={'#808080'} >
          We prioritize data security and ensure that your survey responses are stored securely. You can export survey results in various formats such as PDF, CSV, and PNG for further analysis and sharing.
          </Typography>
          <Typography color={'#808080'} >
          Start your feedback journey with FeedbackSense and unlock the power of customer insights to drive growth and improve your business. Sign up today and begin collecting valuable feedback in a simple and efficient way.
          </Typography>
          <Typography color={'#808080'} >
          We are here to support you at every step of your feedback journey. If you have any questions or need assistance, please don't hesitate to reach out to our dedicated support team.
          </Typography>
          <Typography color={'#808080'} >
          Thank you for choosing FeedbackSense!

          The FeedbackSense Team</Typography>
      </Box>
    </Box>
  )
}

export default About