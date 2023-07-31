import { Box, IconButton, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import analysisGIF from '../Assets/analysisvid.gif';
import designGIF from '../Assets/design.gif';

function Differentiator() {

    useEffect(() => {
        // return () => clearInterval(intervalId);
    }, []); 
    
    const isSmallScreen = useMediaQuery('(max-width: 830px)');

    const data = [
        {
            header: 'Unparalleled Simplicity',
            desc: ` Building surveys doesn't have to be complicated. 
            With FeedbackSense, you can effortlessly create professional and engaging surveys using our intuitive drag-and-drop builder.
            No technical expertise required, just pick, place, and publish!`,
            image: 'happyteam.jpg',
        },
        {
            header: 'Intelligent Insights Through AI',
            desc: `Dive deep into the world of customer feedback with our advanced analytics and AI-assisted analysis.
            FeedbackSense turns raw data into actionable insights, helping you understand your customers like never before.
            Make informed decisions with confidence!`,
            image: 'intellegent.jpg',
        },
        {
            header: 'Collaboration Without Boundaries',
            desc: `Team collaboration is key to success, and with FeedbackSense, there are no limits. 
            Invite unlimited users to your account and work together seamlessly. 
            Whether it's a small team or an entire organization, we've got room for everyone.`,
            image: 'collab2.jpg',
        },
        {
            header: 'Tailored to Your Needs',
            desc: `Every business is unique, and so are your needs. 
            FeedbackSense provides personalized solutions to meet your specific requirements. 
            Whether you have unique integration needs or specific functionality, we're here to adapt and deliver.`,
            image: 'tailored.jpg',
        },
        {
            header: 'Your Survey, Your Way',
            desc: ` Say goodbye to generic, one-size-fits-all surveys. With FeedbackSense, 
            you have complete control over your survey's look and feel. Customize colors, fonts,
             and layouts to match your brand, making every survey a true reflection of your identity.`,
            image: 'designD.jpg',
        },
    ]

    const [index, setIndex] = useState(0);
    const [selectedData, setSelectedData] = useState(data[index]);

    const prev = () => {
        let tempIndex = 0;
        if (index - 1 < 0) {
            tempIndex = 3;
        } else {
            tempIndex = index - 1;
        }
        setIndex(tempIndex);
        setSelectedData(data[tempIndex]);
    }

    const next = () => {
        let tempIndex = 0;
        if (index + 1 === data.length) {
            tempIndex = 0;
        } else {
            tempIndex = index + 1;
        }
        setIndex(tempIndex);
        setSelectedData(data[tempIndex]);
    }

    return (
        <Box padding={'5%'}>
            <Typography fontSize={40} >
                What makes us <span style={{ color: '#006dff' }} >different.</span>
            </Typography>
            <Box display={'flex'} justifyContent={'space-between'}>
                <IconButton onClick={prev}>
                    <ArrowBackIosIcon sx={{color : '#006dff'}}/>
                </IconButton>
                <Box
                    sx={{ backgroundColor: '#323533', borderRadius: '10px', transition: '0.3s' }}
                    display={isSmallScreen === false ? 'flex' : 'block'}
                    marginTop={'30px'}
                    justifyContent={'center'}
                    padding={'5%'}
                >
                    <img
                        src={selectedData.image}
                        alt='sa'
                        className='image-shadow-2'
                        style={{ borderRadius: '10px'}}
                        width={isSmallScreen === false ? '40%' : '100%'}
                    />
                    <Box sx={{ transition: '0.3s' }} marginLeft={isSmallScreen === false ? 10 : 0} >
                        <Typography textAlign={isSmallScreen ? 'center' : 'start'} fontSize={40} >{selectedData.header}</Typography>
                        <Typography textAlign={isSmallScreen ? 'center' : 'start'} fontSize={20} color={'#808080'} >
                            {selectedData.desc}
                        </Typography>
                    </Box>
                </Box>
                <IconButton onClick={next}>
                    <ArrowForwardIosIcon sx={{color : '#006dff'}}/>
                </IconButton>
            </Box>
        </Box>
    )
}

export default Differentiator