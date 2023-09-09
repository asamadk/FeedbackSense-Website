import { Box, ToggleButton, ToggleButtonGroup, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'

function ComponentsDisplay() {

    useEffect(() => {
        const data = [
            'hero8.png',
            'hero7.png',
            'hero6.png',
            'hero9.png',
        ];
        data.forEach(item => {
            const img = new Image();
            img.src = item;
        });
    },[]);

    const isSmallScreen = useMediaQuery('(max-width: 830px)');
    
    const [value, setValue] = useState('0');
    const [img, setImg] = useState('hero8.png');

    const handleToggleChange = (event: any) => {
        const tempVal = event.target.value;
        setValue(tempVal);
        if(tempVal === '0'){
            setImg('hero8.png')
        }else if(tempVal === '1'){
            setImg('hero7.png')
        }else if(tempVal === '2'){
            setImg('hero6.png')
        }else if(tempVal === '3'){
            setImg('hero9.png')
        }
    }

    return (
        <Box marginBottom={'10%'} >
            <Typography variant='h3' >Grasp Your Survey Insights Instantly.</Typography>
            <ToggleButtonGroup
                exclusive
                value={value}
                aria-label="Platform"
                onChange={handleToggleChange}
                size='small'
                sx={{
                    marginTop: '20px',
                    '& .MuiToggleButton-root': {
                        backgroundColor: '#ffffff', // for the unselected state
                        '&:hover': {
                            backgroundColor: '#ececec', // for the hover state
                        },
                        '&.Mui-selected': {
                            backgroundColor: '#006dff', // for the selected state
                            color: '#ffffff',
                            '&:hover': {
                                backgroundColor: '#006dff', // for the hover state
                            },
                        }
                    }
                }}
            >
                <ToggleButton sx={{ width: '100px' }} value="0">Responses</ToggleButton>
                <ToggleButton sx={{ width: '100px' }} value="1">NPS</ToggleButton>
                <ToggleButton sx={{ width: '100px' }} value="2">Selection</ToggleButton>
                <ToggleButton sx={{ width: '100px' }} value="3">Text</ToggleButton>
            </ToggleButtonGroup>
            <Box>
                <img
                    style={{width : isSmallScreen === false ? '50%' : '100%'}}
                    src={img}
                    alt={img}
                />
            </Box>
        </Box>
    )
}

export default ComponentsDisplay