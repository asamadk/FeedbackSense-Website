import { Box, Divider, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import CallToAction from '../Components/CallToAction'
import { useNavigate } from 'react-router'
import '../Styles/Image.css'
import Typewriter from "typewriter-effect";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Differentiator from '../Components/Differentiator'
import ComponentsDisplay from '../Components/ComponentsDisplay'
import FindUs from '../Components/FindUs'

function Home() {
  return (
    <>
      <HeadingDisplay />
      <Divider sx={{ backgroundColor: '#808080', marginBottom: '20px' }} />
      <Differentiator />
      <Divider sx={{ backgroundColor: '#808080', marginBottom: '20px' }} />
      <MainBody />
      <ComponentsDisplay/>
      <CallToAction />
      {/* <FindUs/> */}
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
    <Box sx={{ padding: '5%', display: isSmallScreen === false ? 'flex' : 'block', justifyContent: 'space-between' }} >
      <img
        className='image-shadow-3'
        style={{ borderRadius: '10px' }}
        width={isSmallScreen === false ? '60%' : '100%'}
        alt='Hero'
        src='/hero1.png' />
      <Box paddingTop={'10%'} textAlign={'start'} width={isSmallScreen === false ? '40%' : '100%'}  >
        <Typography fontSize={40} >
          We make sense of your
          <br />
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("surveys.")
                .pauseFor(1000)
                .deleteAll()
                .typeString("feedback.")
                .start()
            }}
          />
        </Typography>
        <Typography marginTop={'25px'} fontSize={20} color={'#808080'} >
          Gain valuable insights into customer sentiment and feedback,
          and use that information to improve your products or services
          with FeedbackSense.
          <br />
        </Typography>
        <Box marginTop={'25px'} ></Box>

        <Box marginTop={'10px'} display={'flex'} >
          <PlayArrowIcon sx={{ color: '#006dff' }} />
          <Typography fontSize={18} color={'#808080'} >Visual survey builder like no other.</Typography>
        </Box>
        <Box marginTop={'10px'} display={'flex'} >
          <PlayArrowIcon sx={{ color: '#006dff' }} />
          <Typography fontSize={18} color={'#808080'} >Tailored for startups and mid-level companies.</Typography>
        </Box>
        <Box marginTop={'10px'} display={'flex'} >
          <PlayArrowIcon sx={{ color: '#006dff' }} />
          <Typography fontSize={18} color={'#808080'} >Comprehensive analysis with both aggregate graphs and individual responses.</Typography>
        </Box>

        <Box marginTop={'50px'} >
          <button onClick={() => navigate('/product')} style={{ marginRight: '10px' }} className='outlined-button' >Learn more</button>
          <button onClick={handleStartFreePlan} className='contained-button' >Start a free plan</button>
        </Box>
      </Box>
    </Box>
  )
}

function MainBody() {

  const isSmallScreen = useMediaQuery('(max-width: 830px)');

  return (
    <Box >
      <Typography width={'400px'} margin={'auto'} fontSize={40} >
        Why do people love us?
      </Typography>
      <LeftDisplay
        title={'Streamlined Feedback Exchange'}
        img='/hero2.png'
        points={['Centralized feedback collection platform for businesses.', 'Intuitive tools for organizing and prioritizing customer insights.', 'Advanced analytics for deep-diving into customer feedback patterns.']}
        design='image-shadow-2'
        desc={'FeedbackSense simplifies the feedback collection process by providing businesses with a centralized platform to gather, organize, and analyze feedback from their customers.'}
      />

      {
        isSmallScreen === false ?
          <RightDisplay
            title={'Data-Driven Decision Making'}
            img='/dragdropwithflow.png'
            design='image-shadow-2'
            desc={'Identify emerging trends, spot areas for improvement, and make informed decisions based on data, enabling your business to stay ahead of the competition.'}
          /> :
          <LeftDisplay
            title={'Data-Driven Decision Making'}
            img='/dragdropwithflow.png'
            design='image-shadow-2'
            desc={'Identify emerging trends, spot areas for improvement, and make informed decisions based on data, enabling your business to stay ahead of the competition.'}
          />
      }
      <LeftDisplay
        title={'Enhanced Customer Engagement'}
        img='/hero3.png'
        points={['Actively fosters customer engagement.', 'Reinforces the value of customer opinions.', 'Builds trust through transparent feedback processes.']}
        desc={'With FeedbackSense, businesses can actively engage with their customers and demonstrate that their opinions matter.'}
      />
      {
        isSmallScreen === false ?
          <RightDisplay
            title={'Excellent Customer Support'}
            img='/customer-support.jpg'
            design='image-shadow-3'
            desc={'At FeedbackSense, we pride ourselves on delivering exceptional customer support. Our dedicated team is ready to assist you with any questions or issues you may have.'}
          /> :
          <LeftDisplay
            title={'Excellent Customer Support'}
            img='/customer-support.jpg'
            design='image-shadow-3'
            desc={'At FeedbackSense, we pride ourselves on delivering exceptional customer support. Our dedicated team is ready to assist you with any questions or issues you may have.'}
          />
      }
      <LeftDisplay
        title={'Efficient Lead Generation'}
        img='/hero4.png'
        points={['Dual functionality: feedback collection and lead generation.', 'Streamlines customer insights and business growth.', 'Enhances engagement while expanding your prospect base.']}
        design='image-shadow-2'
        desc={'FeedbackSense not only helps you gather feedback but also acts as a lead-generation tool.'}
      />
      {
        isSmallScreen === false ?
          <RightDisplay
            title={'Effortless Survey Creation'}
            img='/hero5.png'
            design='image-shadow-2'
            desc={'Our platform is designed to make survey creation a breeze. With our intuitive interface and user-friendly features, you can quickly build engaging and impactful surveys without any technical expertise.'}
          /> :
          <LeftDisplay
            title={'Effortless Survey Creation'}
            img='/hero5.png'
            design='image-shadow-2'
            desc={'Our platform is designed to make survey creation a breeze. With our intuitive interface and user-friendly features, you can quickly build engaging and impactful surveys without any technical expertise.'}
          />
      }
    </Box>
  )
}

export function RightDisplay({ title, desc, img, design }: any) {

  const isSmallScreen = useMediaQuery('(max-width: 830px)');

  return (
    <Box sx={{ padding: isSmallScreen === false ? '5%' : '10%', display: isSmallScreen === false ? 'flex' : 'block', justifyContent: 'space-between' }} >
      <img
        className={design}
        style={{ borderRadius: '10px' }}
        width={isSmallScreen === false ? '55%' : '100%'}
        alt='Hero'
        src={img} />
      <Box textAlign={'end'} width={isSmallScreen === false ? '40%' : '100%'}  >
        <Typography paddingTop={'10%'} fontSize={40} >
          {title}
        </Typography>
        <Typography fontSize={20} color={'#808080'} >
          {desc}
        </Typography>
      </Box>
    </Box>
  )
}

export function LeftDisplay({ title, desc, img, design, points }: any) {
  const isSmallScreen = useMediaQuery('(max-width: 830px)');
  return (
    <Box sx={{ padding: isSmallScreen === false ? '5%' : '10%', display: isSmallScreen === false ? 'flex' : 'block', justifyContent: 'space-between' }} >
      <Box textAlign={'start'} width={isSmallScreen === false ? '40%' : '100%'}  >
        <Typography paddingTop={'10%'} fontSize={40} >
          {title}
        </Typography>
        <Typography fontSize={20} color={'#808080'} >
          {desc}
        </Typography>
        {
          points?.length > 0 &&
          <Box marginTop={'40px'} display={'flex'} >
            <PlayArrowIcon sx={{ color: '#006dff' }} />
            <Typography fontSize={18} color={'#808080'} >{points[0]}</Typography>
          </Box>
        }
        {
          points?.length > 1 &&
          <Box marginTop={'10px'} display={'flex'} >
            <PlayArrowIcon sx={{ color: '#006dff' }} />
            <Typography fontSize={18} color={'#808080'} >{points[1]}</Typography>
          </Box>
        }
        {
          points?.length > 2 &&
          <Box marginTop={'10px'} display={'flex'} >
            <PlayArrowIcon sx={{ color: '#006dff' }} />
            <Typography fontSize={18} color={'#808080'} >{points[2]}</Typography>
          </Box>
        }
      </Box>
      <img
        className={design}
        style={{ borderRadius: '10px', marginTop: isSmallScreen === false ? '0px' : '20px' }}
        width={isSmallScreen === false ? '55%' : '100%'}
        alt='Hero'
        src={img} />
    </Box>
  )
}