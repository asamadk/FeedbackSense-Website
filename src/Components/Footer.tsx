// import { Box, Divider, Typography } from '@mui/material'
// import React from 'react'
// import Logo from './Logo'
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import CopyrightIcon from '@mui/icons-material/Copyright';

// function Footer() {
//     return (
//         <>
//             <Box padding={'20px'} margin={'20px'} >
//                 <Box display={'flex'} justifyContent={'space-between'}  >
//                     <Logo />
//                     <Box sx={{ cursor: 'pointer' }} display={'flex'} >
//                         <Typography color={'#808080'} marginRight={'20px'} >About</Typography>
//                         <Typography color={'#808080'} marginRight={'20px'}>Privacy policy</Typography>
//                         <Typography color={'#808080'} marginRight={'20px'}>Contact Us</Typography>
//                         <Typography color={'#808080'} marginRight={'20px'}>Licensing</Typography>
//                     </Box>
//                 </Box>
//                 <Divider sx={{ backgroundColor: '#808080', marginTop: '20px', marginBottom: '20px' }} />
//                 <Box display={'flex'} justifyContent={'space-between'}  >
//                     <Typography color={'#808080'} >Terms & Condition</Typography>
//                     <Typography
//                         color={'#808080'} >
//                             With <FavoriteIcon sx={{position : 'relative',top : '5px'}} /> from India 
//                     </Typography>
//                     <Typography 
//                         color={'#808080'} >
//                             <CopyrightIcon sx={{position : 'relative',top : '6px'}} /> FeedbackSense
//                     </Typography>
//                 </Box>
//             </Box>
//         </>
//     )
// }

// export default Footer
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box, Container, Link, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import Logo from './Logo';
import { useNavigate } from 'react-router';

export default function Footer(props: any) {
    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery('(max-width: 920px)');

    const content = {
        'brand': { image: 'nereus-assets/img/nereus-light.png', width: 110 },
        'copy': '© 2023 FeedbackSense All rights reserved.',
        'link1': 'About',
        'link2': 'Privacy Policy',
        'link3': 'Licensing',
        'link4': 'Contact',
        ...props.content
    };

    let brand;

    if (content.brand.image) {
        brand = <img src={content.brand.image} alt="" width={content.brand.width} />;
    } else {
        brand = content.brand.text || '';
    }

    return (
        <footer>
            <Container sx={{ color: '#808080' }} maxWidth="lg">
                <Box py={6} display={isSmallScreen === false ? 'flex' : 'block'} flexWrap="wrap" alignItems="center" justifyContent={'space-between'}>
                    <Box width={'200px'}  margin={isSmallScreen === true ? 'auto' : '0'}>
                        <Logo />
                    </Box>
                    <Box component="nav">
                        <Link href="/about" variant="body1" style={{ marginRight: '20px' }} >{content['link1']}</Link>
                        <Link href="/privacy-policy" variant="body1" style={{ marginRight: '20px' }}>{content['link2']}</Link>
                        <Link href="/licensing" variant="body1" style={{ marginRight: '20px' }} >{content['link3']}</Link>
                        <Link href="/support" variant="body1" style={{ marginRight: '20px' }} >{content['link4']}</Link>
                    </Box>
                    <Typography component="p" variant="caption" gutterBottom={false}>{content['copy']}</Typography>
                </Box>
            </Container>
            <Typography
                marginBottom={'20px'}
                color={'#808080'} >
                With <FavoriteIcon sx={{ position: 'relative', top: '5px' }} /> from India
            </Typography>
        </footer>
    );
}