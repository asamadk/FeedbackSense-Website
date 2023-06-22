import { Box, Divider, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import CallToAction from '../Components/CallToAction'
import { useNavigate } from 'react-router'
import '../Styles/Image.css'

function Home() {
  return (
    <>
      <HeadingDisplay />
      <Divider sx={{ backgroundColor: '#808080', marginBottom: '20px' }} />
      <MainBody />
      <CallToAction />
    </>
  )
}

export default Home

function HeadingDisplay() {

  const navigate = useNavigate();

  const handleStartFreePlan = () => {
    window.open('https://app.feedbacksense.io');
  }

  const isSmallScreen = useMediaQuery('(max-width: 830px)');

  return (
    <Box sx={{ padding: '10%', display: isSmallScreen === false ? 'flex' : 'block', justifyContent: 'space-between' }} >
      <img
        className='image-shadow-3'
        style={{ borderRadius: '10px' }}
        width={isSmallScreen === false ? '40%' : '100%'}
        alt='Hero'
        src='/hero.png' />
      <Box textAlign={'end'} width={isSmallScreen === false ? '40%' : '100%'}  >
        <Typography fontSize={40} >
          We make sense of your
          <br />
          feedback.
        </Typography>
        <Typography color={'#808080'} >
          With FeedbackSense, you can gain valuable insights into customer sentiment and feedback, and use that information to improve your products or services.
        </Typography>
        <Box marginTop={'10px'} >
          <button onClick={() => navigate('/product')} style={{ marginRight: '10px' }} className='outlined-button' >Learn more</button>
          <button onClick={handleStartFreePlan} className='contained-button' >Start a free plan</button>
        </Box>
      </Box>
    </Box>
  )
}

function MainBody() {

  return (
    <Box >
      <Typography width={'400px'} margin={'auto'} fontSize={40} >
        Why do people love us?
      </Typography>
      <LeftDisplay
        title={'Streamlined Feedback Exchange'}
        img='/Streamlined feedback exchange.png'
        design='image-shadow-3'
        desc={'FeedbackSense simplifies the feedback collection process by providing businesses with a centralized platform to gather, organize, and analyze feedback from their customers.'}
      />
      <RightDisplay
        title={'Data-Driven Decision Making'}
        img='/Data driven dec making.png'
        design='image-shadow-3'
        desc={'Identify emerging trends, spot areas for improvement, and make informed decisions based on data, enabling your business to stay ahead of the competition.'}
      />
      <LeftDisplay
        title={'Enhanced Customer Engagement'}
        img='/Enhanced customer engagement.png'
        design='image-shadow-3'
        desc={'With FeedbackSense, businesses can actively engage with their customers and demonstrate that their opinions matter.'}
      />
      <RightDisplay
        title={'Excellent Customer Support'}
        img='/Eccelent customer support.png'
        design='image-shadow-3'
        desc={'At FeedbackSense, we pride ourselves on delivering exceptional customer support. Our dedicated team is ready to assist you with any questions or issues you may have.'}
      />
      <LeftDisplay
        title={'Efficient Lead Generation'}
        img='/Efficient lead generation.png'
        design='image-shadow-3'
        desc={'FeedbackSense not only helps you gather feedback but also acts as a lead-generation tool.'}
      />
      <RightDisplay
        title={'Effortless Survey Creation'}
        // img='/effortless survey creation.png'
        img='analysis5.png'
        design='image-shadow-3'
        desc={'Our platform is designed to make survey creation a breeze. With our intuitive interface and user-friendly features, you can quickly build engaging and impactful surveys without any technical expertise.'}
      />
    </Box>
  )
}

export function RightDisplay({ title, desc, img, design }: any) {

  const isSmallScreen = useMediaQuery('(max-width: 830px)');

  return (
    <Box sx={{ padding: '10%', display: isSmallScreen === false ? 'flex' : 'block', justifyContent: 'space-between' }} >
      <img
        className={design}
        style={{ borderRadius: '10px' }}
        width={isSmallScreen === false ? '40%' : '100%'}
        alt='Hero'
        src={img} />
      <Box textAlign={'end'} width={isSmallScreen === false ? '40%' : '100%'}  >
        <Typography fontSize={40} >
          {title}
        </Typography>
        <Typography color={'#808080'} >
          {desc}
        </Typography>
      </Box>
    </Box>
  )
}

export function LeftDisplay({ title, desc, img,design }: any) {
  const isSmallScreen = useMediaQuery('(max-width: 830px)');
  return (
    <Box sx={{ padding: '10%', display: isSmallScreen === false ? 'flex' : 'block', justifyContent: 'space-between' }} >
      <Box textAlign={'start'} width={isSmallScreen === false ? '40%' : '100%'}  >
        <Typography fontSize={40} >
          {title}
        </Typography>
        <Typography color={'#808080'} >
          {desc}
        </Typography>
      </Box>
      <img
        className={design}
        style={{ borderRadius: '10px', marginTop: isSmallScreen === false ? '0px' : '20px' }}
        width={isSmallScreen === false ? '40%' : '100%'}
        alt='Hero'
        src={img} />
    </Box>
  )
}