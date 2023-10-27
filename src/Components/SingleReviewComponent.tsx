import { Box, Typography } from '@mui/material'
import React from 'react'

function SingleReviewComponent({message,author,from} : {message : string,author : string,from : string}) {
  return (
    <Box 
        textAlign={'start'} 
        width={'70%'} 
        margin={'20px auto'}  
        marginBottom={'20px'}
        sx={{backgroundColor : '#212a2b',padding : '20px 40px',borderRadius : '5px'}}
    >
        <Typography variant='h4' >
            {/* <span style={{color : '#006dff',fontSize : '50px'}} >"</span> */}
            {message}
            {/* <span style={{color : '#006dff',fontSize : '50px'}} >"</span> */}
        </Typography>
        <Typography marginTop={'15px'} variant='h6' >{author}</Typography>
        <Typography color={'#808080'} >{from}</Typography>
    </Box>
  )
}

export default SingleReviewComponent