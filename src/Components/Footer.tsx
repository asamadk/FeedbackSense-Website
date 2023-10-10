import FavoriteIcon from '@mui/icons-material/Favorite';
import { Avatar, Box, Container, Grid, Link, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import Logo from './Logo';
import { useNavigate } from 'react-router';
import SocialComponent from './SocialComponent';
import EmailIcon from '@mui/icons-material/Email';
import WebAssetIcon from '@mui/icons-material/WebAsset';

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
        'header': 'You can reach us at.',
        'description': 'Feel free to contact us with the listed means as you see fit.',
        'contact2': 'Email',
        'contact2-desc': 'founder@feedbacksense.io',
        'contact3': 'Social Media',
        ...props.content
    };

    let brand;

    if (content.brand.image) {
        brand = <img src={content.brand.image} alt="" width={content.brand.width} />;
    } else {
        brand = content.brand.text || '';
    }

    return (
        <footer >
            <Container maxWidth="lg" sx={{ textAlign: 'start', width: '60%', margin: 'auto' }} >
                <Box py={5}>
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={4} >
                            <Typography variant="h6" component="h2" gutterBottom={true}>{content['header']}</Typography>
                            <Typography variant="subtitle1" color="#808080" paragraph={true}>{content['description']}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <div >
                                <Box display="flex">
                                    <div>
                                        <Avatar >
                                            <EmailIcon color="primary" fontSize="small" />
                                        </Avatar>
                                    </div>
                                    <Box ml={2}>
                                        <Typography variant="h6" gutterBottom={true}>{content['contact2']}</Typography>
                                        <Typography variant="body2" color="#808080">{content['contact2-desc']}</Typography>
                                    </Box>
                                </Box>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Box display="flex" mb={3}>
                                <div>
                                    <Avatar >
                                        <WebAssetIcon color="primary" fontSize="small" />
                                    </Avatar>
                                </div>
                                <Box ml={2}>
                                    <Typography variant="h6" gutterBottom={true}>{content['contact3']}</Typography>
                                    <SocialComponent />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Container sx={{ color: '#808080' }} maxWidth="lg">
                <Box py={6} display={isSmallScreen === false ? 'flex' : 'block'} flexWrap="wrap" alignItems="center" justifyContent={'space-between'}>
                    <Box width={'200px'} margin={isSmallScreen === true ? 'auto' : '0'}>
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
            {/* <SocialComponent/> */}
        </footer>
    );
}