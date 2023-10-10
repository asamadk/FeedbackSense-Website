import { IconButton } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import React from 'react'

function SocialComponent() {
    return (
        <>
            <IconButton target='__blank' href="https://www.facebook.com/profile.php?id=100093644569497" color="inherit">
                <FacebookIcon />
            </IconButton>
            <IconButton target='__blank' href="https://twitter.com/Feedback_Sense" color="inherit">
                <TwitterIcon />
            </IconButton>
            <IconButton target='__blank' href="https://www.linkedin.com/company/feedbacksense/" color="inherit">
                <LinkedInIcon />
            </IconButton>
            <IconButton target='__blank' href="https://www.youtube.com/channel/UCA4cg77mSWT0u1tUS0Y_oCg" color="inherit">
                <YouTubeIcon />
            </IconButton>
        </>
    )
}

export default SocialComponent