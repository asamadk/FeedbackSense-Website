// import { Box, Typography } from '@mui/material'
// import React from 'react'

// function CallToAction() {
//     return (
//         <Box bgcolor={'#323533'}>
//             <Box sx={{ padding: '10%', display: 'flex', justifyContent: 'space-between' }} >
//                 <Box textAlign={'start'} width={'30%'}  >
//                     <Typography fontSize={40} >
//                     Some call to action text
//                     </Typography>
//                     <Typography color={'#f1f1f1'} >
//                     There should also be some description as well, we w ill figure out later what the content should be like.
//                     </Typography>
//                     <button style={{marginTop : '20px'}} className='contained-button' >Book a demo</button>
//                 </Box>
//                 <Box sx={{ backgroundColor: '#454545' }} width={'40%'} borderRadius={'10px'}>
//                 </Box>
//             </Box>
//         </Box>
//     )
// }

// export default CallToAction
import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';

export default function CallToAction(props : any) {

  const navigate = useNavigate();

  const content = {
    'header-p1': 'Harness',
    'header-p2': 'the Voice of Your Customers.',
    'description': 'Empower your business with actionable insights from customer feedback.',
    'primary-action': 'Get started',
    'secondary-action': 'Learn More',
    ...props.content
  };

  const handleStartFreePlan = () => {
    window.open('https://app.feedbacksense.io');
  }

  return (
    <section style={{backgroundColor : '#323533'}} >
      <Container maxWidth="sm">
        <Box py={10} textAlign="center" color="common.white">
          <Typography variant="h3" component="h3" gutterBottom={true}>
            <Typography color="#006DFF" variant="h3" component="span">{content['header-p1']} </Typography>
            <Typography variant="h3" component="span">{content['header-p2']}</Typography>
          </Typography>
          <Container maxWidth="sm">
            <Typography variant="subtitle1" paragraph={true} >{content['description']}</Typography>
          </Container>
          <Box mt={3}>
            <button onClick={handleStartFreePlan} className='contained-button' >{content['primary-action']}</button>
            <button onClick={() => navigate('/product')} style={{marginLeft : '10px'}} className='outlined-button' >{content['secondary-action']}</button>
          </Box>
        </Box>
      </Container>
    </section>
  );
}