import { Box } from '@mui/material'
import React from 'react'

function Ticket() {
  return (
    <>
    <Box marginTop={'10%'} >
        <Box className="image-shadow-3" >
            <iframe
                id="zsfeedbackFrame" 
                width="890" 
                height="570"
                name="zsfeedbackFrame" 
                scrolling="no" 
                allowTransparency={false}
                frameBorder="0" 
                src="https://desk.zoho.in/support/fbw?formType=AdvancedWebForm&fbwId=edbsnadf5522686456005960ffd139855cadd44a38b441b8462c74d77c2eb2218cb96&xnQsjsdp=edbsn55e6cbe8ec624f5f71cbc0a2246b0f62&mode=showNewWidget&displayType=iframe"
            ></iframe>
        </Box>
    </Box>
    </>
  )
}

export default Ticket