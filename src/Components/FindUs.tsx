import { Box } from '@mui/material'
import React from 'react'

const mainContainer = {
    padding : '10px',
    margin : '10px'
}

function FindUs() {
    return (
        <Box sx={mainContainer} >
            <Box>
                <a
                    href="https://www.producthunt.com/posts/feedbacksense?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-feedbacksense"
                    target="_blank"
                    rel="noreferrer"
                ><img
                        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=417126&theme=light"
                        alt="FeedbackSense - We&#0032;make&#0032;sense&#0032;of&#0032;your&#0032;feedbacksense | Product Hunt"
                        style={{width : '250px',height : '54px'}}
                        width="250"
                        height="54"
                    />
                </a>
            </Box>
        </Box>
    )
}

export default FindUs