import { Box, Typography } from '@mui/material'
import React from 'react'

function BlogsHero() {
  return (
    <Box sx={{margin : '10px',marginTop : '20px', padding : '10px'}} >
        <Typography variant='h3' sx={{color : 'white'}} >Feedback<span style={{color : '#006dff'}} >Sense</span> Blogs</Typography>
        <Typography 
            color={'#808080'}
            marginTop={'10px'}
        >
                Insights on Client Engagement, Satisfaction Metrics, User Feedback, and Beyond.
        </Typography>
        <div style={{margin : '40px 20px'}} ></div>
    </Box>
  )
}

export default BlogsHero