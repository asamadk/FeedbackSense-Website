import { Box, IconButton, ThemeProvider, createTheme, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import '../Styles/Buttons.css'
import MenuIcon from '@mui/icons-material/Menu';
import Logo from './Logo'
import { useNavigate } from 'react-router'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import EditNoteIcon from '@mui/icons-material/EditNote';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CallIcon from '@mui/icons-material/Call';
import { setDocumentTitle } from '../Utils/DOMUtils';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const marginTabStyle = {
    marginRight: '20px',
    cursor: 'pointer',
    marginTop: '10px',
    padding: '10px',
    paddingTop: 0,
    fontWeight: 800
}

const selectedTab = {
    marginRight: '20px',
    cursor: 'pointer',
    padding: '10px',
    color: '#006dff',
    fontWeight: 800
}

function Header() {

    useEffect(() => {
        checkSelectedTab();
    }, [window.location.pathname]);

    const checkSelectedTab = () => {
        const pathName = window.location.pathname;
        if (pathName === '/') {
            setSelectedTab(0);
            // setDocumentTitle('FeedbackSense | Home');
        } else if (pathName === '/product') {
            setSelectedTab(1);
            // setDocumentTitle('FeedbackSense | Product');
        } else if (pathName === '/pricing') {
            setSelectedTab(2);
            // setDocumentTitle('FeedbackSense | Pricing');
        } else if (pathName === '/support') {
            setSelectedTab(3);
            // setDocumentTitle('FeedbackSense | Support');
        } else if(pathName.includes('/blog')){
            setSelectedTab(4);
            // setDocumentTitle('FeedbackSense | Blog');
        }
    }

    const [selectedTabVal, setSelectedTab] = useState(0);
    const isSmallScreen = useMediaQuery('(max-width: 850px)');

    const navigate = useNavigate();

    const handleTabClick = (value: number) => {
        setSelectedTab(value);
        window.scrollTo(0,0);
        if (value === 0) {
            navigate('/');
        } else if (value === 1) {
            navigate('/product');
        } else if (value === 2) {
            navigate('/pricing');
        } else if (value === 3) {
            navigate('/support');
        } else if (value === 4) {
            navigate('/blogs');
        }
    }

    const handleStartFreePlan = () => {
        window.open('https://app.feedbacksense.io');
    }

    const handleBookMeeting = () => {
        window.open('https://calendly.com/feedbacksense/demo', '__blank');
    }

    return (
        <>
            {isSmallScreen === false ?
                <Box
                    display={'flex'}
                    sx={{ backgroundColor: '#081213' }}
                    justifyContent={'space-between'}
                    // padding={'10px'} 
                    // margin={'10px'} 
                    borderBottom={'0.5px #454545 solid'}
                    paddingBottom={'20px'}
                    paddingTop={'20px'}
                    position="fixed" // <-- This line makes it fixed
                    width="100%" // <-- This line sets the width to cover the entire viewport width
                    zIndex="999" // <-- This line ensures that the header stays on top of other content
                    top={0} // <-- This line positions the header at the top of the page
                // left={0} // <-- This line positions the header at the left edge of the page
                >
                    <Box sx={{ marginLeft: '10px' }} ><Logo /></Box>
                    <Box display={'flex'} >
                        <Box sx={selectedTabVal === 0 ? selectedTab : marginTabStyle} onClick={() => handleTabClick(0)}>Home</Box>
                        <Box sx={selectedTabVal === 1 ? selectedTab : marginTabStyle} onClick={() => handleTabClick(1)}>Product</Box>
                        <Box sx={selectedTabVal === 2 ? selectedTab : marginTabStyle} onClick={() => handleTabClick(2)}>Pricing</Box>
                        <Box sx={selectedTabVal === 3 ? selectedTab : marginTabStyle} onClick={() => handleTabClick(3)}>Support</Box>
                        <Box sx={selectedTabVal === 4 ? selectedTab : marginTabStyle} onClick={() => handleTabClick(4)}>Blog</Box>
                    </Box>
                    <Box>
                        <button onClick={handleStartFreePlan} style={{ marginRight: '10px' }} className='outlined-button' >
                            Login
                        </button>
                        <button style={{ marginRight: '10px' }} onClick={handleBookMeeting} className='contained-button' >
                            Book a demo
                        </button>
                    </Box>
                </Box> : <SmallScreenHeader handleClick={handleTabClick} />
            }
        </>
    )
}

export default Header

function SmallScreenHeader(props: any) {

    const handleStartFreePlan = () => {
        window.open('https://app.feedbacksense.io');
    }

    const handleBookMeeting = () => {
        window.open('https://calendly.com/feedbacksense/demo', '__blank');
    }

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,backgroundColor : '#081213',height : '100%' }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Home', 'Product', 'Pricing', 'Support', 'Blog'].map((text, index) => (
                    <ListItem key={text} >
                        <ListItemButton onClick={() => props.handleClick(index)} >
                            {index === 0 && <HomeIcon sx={{ marginRight: '10px' }} />}
                            {index === 1 && <Inventory2Icon sx={{ marginRight: '10px' }} />}
                            {index === 2 && <AttachMoneyIcon sx={{ marginRight: '10px' }} />}
                            {index === 3 && <CallIcon sx={{ marginRight: '10px' }} />}
                            {index === 4 && <EditNoteIcon sx={{ marginRight: '10px' }} />}
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Box paddingLeft={'25px'} marginBottom={'10px'}>
                <button onClick={handleBookMeeting} style={{ width: '140px' }} className='outlined-button' >
                    Book a meeting
                </button>
            </Box>
            <Box paddingLeft={'25px'} marginBottom={'10px'}>
                <button onClick={handleStartFreePlan} style={{ width: '140px' }} className='contained-button' >
                    Go to app
                </button>
            </Box>
            <Box sx={{ position: 'absolute', bottom: '0' }} >
                <Logo />
            </Box>
        </Box>
    );

    return (
        <Box padding={'10px'} margin={'10px'} display={'flex'} justifyContent={'space-between'}>
            <Box>
                <Logo />
            </Box>
            <Box>
                <IconButton onClick={toggleDrawer('right', true)} >
                    <MenuIcon sx={{ color: '#ffffff' }} />
                </IconButton>
            </Box>
            <ThemeProvider theme={createTheme({ palette: { mode: 'dark' } })} >
                <Drawer
                    anchor={'right'}
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
                >
                    {list('right')}
                </Drawer>
            </ThemeProvider>
        </Box>
    )
}