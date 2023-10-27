import { Accordion, AccordionDetails, AccordionSummary, Box, ThemeProvider, Typography, createTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'
import { faqs } from '../Utils/FAQConstants';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
    typography: {
        fontFamily: 'Apercu Pro, sans-serif'
    }
});

function FAQComponent() {
    return (
        <Box width={'70%'} margin={'20px auto'} marginBottom={'50px'} >
            <Typography marginBottom={'10px'} variant='h3' >FAQs</Typography>
            <ThemeProvider theme={darkTheme} >
                {
                    faqs?.map(faq => {
                        return (
                            <Accordion sx={{backgroundColor : '#212a2b'}} >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography color={'#f1f1f1'} variant='h6' >{faq.name}</Typography>
                                </AccordionSummary>
                                <AccordionDetails >
                                    <Typography color={'#808080'} textAlign={'start'} >{faq.desc}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })
                }
            </ThemeProvider>
        </Box>
    );
}

export default FAQComponent