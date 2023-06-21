import { Avatar, Box, Grid, Typography, useMediaQuery } from '@mui/material';
import React from 'react'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import { LeftDisplay, RightDisplay } from './Home';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import NotesIcon from '@mui/icons-material/Notes';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function Product() {
  return (
    <>
      <HeadingDisplay />
      <MidSection />
      <MidSection2 />
      <LeftDisplay
        title={'Powerful Analytics'}
        desc={'Gain deep insights into customer feedback and behavior, allowing you to make data-driven decisions and improve your product or service.'}
      />
      <RightDisplay
        title={'Seamless Feedback Collection'}
        desc={'Easily gather feedback from customers through intuitive surveys, forms, or in-app feedback widgets, enabling you to understand their needs and preferences.'}
      />
      <LeftDisplay
        title={'Customizable Surveys'}
        img={'colourcheck.png'}
        design='image-shadow-2'
        desc={'Create personalized surveys tailored to your specific requirements, enabling you to gather targeted feedback and extract valuable insights.'}
      />
      <RightDisplay
        title={'Organize and Streamline with Survey Folders'}
        desc={'Take control of your feedback management process by utilizing our powerful Survey Folders feature. With Survey Folders, you can easily organize and categorize your surveys, enabling efficient data management and streamlined collaboration.'}
      />
    </>
  )
}

export default Product

function HeadingDisplay() {

  const isSmallScreen = useMediaQuery('(max-width: 830px)');

  const handleStartFreePlan = () => {
    window.open('https://app.feedbacksense.io');
  }

  return (
    <Box sx={{ padding: '10%', display: isSmallScreen === false ? 'flex' : 'block', justifyContent: 'space-between' }} >
      <Box textAlign={'start'} width={isSmallScreen === false ? '40%' : '100%'}  >
        <Typography fontSize={40} >
          Unlock the Power
          of Feedback Today.
        </Typography>
        <Typography color={'#808080'} >
          Sign Up for Free and Revolutionize Your Decision-Making Process.
        </Typography>
        <Box marginTop={'10px'} >
          <button onClick={handleStartFreePlan} style={{ marginRight: '10px' }} className='contained-button' >Start a free plan</button>
          {/* <button className='outlined-button' >Learn more</button> */}
        </Box>
      </Box>
      <Box
        sx={{ backgroundColor: '#323533' }}
        height={'350px'}
        width={isSmallScreen === false ? '40%' : '100%'}
        borderRadius={'10px'}
        marginTop={isSmallScreen === false ? '0px' : '20px'}
      >
      </Box>
    </Box>
  )
}

function MidSection() {

  const isSmallScreen = useMediaQuery('(max-width: 830px)');

  return (
    <Box sx={{ padding: '10%', paddingBottom: '0' }}>
      <Typography width={'fit-content'} margin={'auto'} fontSize={40} >
        Conversations that strike a chord
      </Typography>
      <Typography color={'#808080'} >
        Ditch the small talk for real talk to build more meaningful relationships with customers:
      </Typography>
      <Box
        sx={{ backgroundColor: '#323533' }}
        height={'350px'}
        width={isSmallScreen === false ? '40%' : '100%'}
        borderRadius={'10px'}
        margin={'auto'}
        marginTop={'20px'}
      >

      </Box>
    </Box>
  )
}

function MidSection2() {

  const isSmallScreen = useMediaQuery('(max-width: 830px)');

  return (
    <Box sx={{ padding: '10%' }}>
      <Typography width={'fit-content'} margin={'auto'} fontSize={40} >
        Discover the Features You'll Fall in Love With
      </Typography>
      <Box sx={{ display: isSmallScreen === false ? 'flex' : 'block', justifyContent: 'space-between', flexWrap: 'wrap' }} >
        <Box
          width={isSmallScreen === false ? '30%' : '100%'}
          marginRight={isSmallScreen === false ? '20px' : '0'}
          borderRadius={'10px'}
          marginTop={'20px'}
        >
          <Box textAlign={'center'} >
            <Avatar sx={{ bgcolor: '#006DFF', width: '100px', height: '100px', margin: 'auto', marginTop: '80px' }} >
              <SignalCellularAltIcon sx={{ fontSize: '40px' }} />
            </Avatar>
            <Typography fontSize={20} marginTop={'10px'} >Real-time sentiment analysis</Typography>
            <Typography fontSize={14} color={'#808080'} >Understand the overall sentiment of customer feedback in real-time.</Typography>
          </Box>
        </Box>
        <Box
          width={isSmallScreen === false ? '30%' : '100%'}
          marginRight={isSmallScreen === false ? '20px' : '0'}
          borderRadius={'10px'}
          marginTop={'20px'}
        >
          <Box textAlign={'center'} >
            <Avatar sx={{ bgcolor: '#006DFF', width: '100px', height: '100px', margin: 'auto', marginTop: '80px' }} >
              <AdsClickIcon sx={{ fontSize: '40px' }} />
            </Avatar>
            <Typography fontSize={20} marginTop={'10px'} >Customizable feedback</Typography>
            <Typography fontSize={14} color={'#808080'} >Design feedback forms that match your brand and gather the data you need.</Typography>
          </Box>
        </Box><Box
          width={isSmallScreen === false ? '30%' : '100%'}
          marginRight={isSmallScreen === false ? '20px' : '0'}
          borderRadius={'10px'}
          marginTop={'20px'}
        >
          <Box textAlign={'center'} >
            <Avatar sx={{ bgcolor: '#006DFF', width: '100px', height: '100px', margin: 'auto', marginTop: '80px' }} >
              <FolderCopyIcon sx={{ fontSize: '40px' }} />
            </Avatar>
            <Typography fontSize={20} marginTop={'10px'} >Survey Folders</Typography>
            <Typography fontSize={14} color={'#808080'} >Stay organized and manage your surveys efficiently with our survey folders feature.</Typography>
          </Box>
        </Box><Box
          width={isSmallScreen === false ? '30%' : '100%'}
          marginRight={isSmallScreen === false ? '20px' : '0'}
          borderRadius={'10px'}
          marginTop={'20px'}
        >
          <Box textAlign={'center'} >
            <Avatar sx={{ bgcolor: '#006DFF', width: '100px', height: '100px', margin: 'auto', marginTop: '80px' }} >
              <NotesIcon sx={{ fontSize: '40px' }} />
            </Avatar>
            <Typography fontSize={20} marginTop={'10px'} >User-friendly dashboard and interface</Typography>
            <Typography fontSize={14} color={'#808080'} >Access all your feedback data and features in an easy-to-use dashboard with drag and drop functionality</Typography>
          </Box>
        </Box><Box
          width={isSmallScreen === false ? '30%' : '100%'}
          marginRight={isSmallScreen === false ? '20px' : '0'}
          borderRadius={'10px'}
          marginTop={'20px'}
        >
          <Box textAlign={'center'} >
            <Avatar sx={{ bgcolor: '#006DFF', width: '100px', height: '100px', margin: 'auto', marginTop: '80px' }} >
              <TrendingUpIcon sx={{ fontSize: '40px' }} />
            </Avatar>
            <Typography fontSize={20} marginTop={'10px'} >Reporting and analytics</Typography>
            <Typography fontSize={14} color={'#808080'} >Analyze feedback data and get insights into customer satisfaction, trends, and areas for improvement.</Typography>
          </Box>
        </Box><Box
          width={isSmallScreen === false ? '30%' : '100%'}
          marginRight={isSmallScreen === false ? '20px' : '0'}
          borderRadius={'10px'}
          marginTop={'20px'}
        >
          <Box textAlign={'center'} >
            <Avatar sx={{ bgcolor: '#006DFF', width: '100px', height: '100px', margin: 'auto', marginTop: '80px' }} >
              <NotificationsIcon sx={{ fontSize: '40px' }} />
            </Avatar>
            <Typography fontSize={20} marginTop={'10px'} >Automated alerts and notifications</Typography>
            <Typography fontSize={14} color={'#808080'} >Get alerts and notifications when new feedback is received or when certain criteria are met.</Typography>
          </Box>
        </Box><Box
          width={isSmallScreen === false ? '30%' : '100%'}
          marginRight={isSmallScreen === false ? '20px' : '0'}
          borderRadius={'10px'}
          marginTop={'20px'}
        >
          <Box textAlign={'center'} >
            <Avatar sx={{ bgcolor: '#006DFF', width: '100px', height: '100px', margin: 'auto', marginTop: '80px' }} >
              <Diversity1Icon sx={{ fontSize: '40px' }} />
            </Avatar>
            <Typography fontSize={20} marginTop={'10px'} >Custom logo</Typography>
            <Typography fontSize={14} color={'#808080'} >Our custom logo design service offers a tailored and professional solution to help your brand stand out.</Typography>
          </Box>
        </Box><Box
          width={isSmallScreen === false ? '30%' : '100%'}
          marginRight={isSmallScreen === false ? '20px' : '0'}
          borderRadius={'10px'}
          marginTop={'20px'}
        >
          <Box textAlign={'center'} >
            <Avatar sx={{ bgcolor: '#006DFF', width: '100px', height: '100px', margin: 'auto', marginTop: '80px' }} >
              <ImportExportIcon sx={{ fontSize: '40px' }} />
            </Avatar>
            <Typography fontSize={20} marginTop={'10px'} >Export results</Typography>
            <Typography fontSize={14} color={'#808080'} >Export your results effortlessly with our intuitive export feature.</Typography>
          </Box>
        </Box><Box
          width={isSmallScreen === false ? '30%' : '100%'}
          marginRight={isSmallScreen === false ? '20px' : '0'}
          borderRadius={'10px'}
          marginTop={'20px'}
        >
          <Box textAlign={'center'} >
            <Avatar sx={{ bgcolor: '#006DFF', width: '100px', height: '100px', margin: 'auto', marginTop: '80px' }} >
              <AttachMoneyIcon sx={{ fontSize: '40px' }} />
            </Avatar>
            <Typography fontSize={20} marginTop={'10px'} >Unbeatable pricing</Typography>
            <Typography fontSize={14} color={'#808080'} >Unlock the best value for your money with our pricing plans. We offer competitive pricing that are designed to fit your budget.</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}