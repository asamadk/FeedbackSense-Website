
import { Box ,Container, Typography } from '@mui/material';
import React from 'react';

export default function CallToAction(props: any) {

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
    <section style={{ backgroundColor: '#006dff' }} >
      <Container maxWidth="sm">
        <Box py={10} textAlign="center" color="common.white">
          <Typography variant="h3" component="h3" gutterBottom={true}>
            <Typography color="#1e1e1e" variant="h3" component="span">{content['header-p1']} </Typography>
            <Typography variant="h3" component="span">{content['header-p2']}</Typography>
          </Typography>
          <Container maxWidth="sm">
            <Typography variant="subtitle1" paragraph={true} >{content['description']}</Typography>
          </Container>
          <Box mt={3}>
            <button onClick={handleStartFreePlan} style={{ border: '1px white solid' }} className='contained-button' >{content['primary-action']}</button>
          </Box>
        </Box>
      </Container>
    </section>
  );
}