import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

function Licensing() {
  return (
    <Box textAlign={'start'} marginTop={'10%'}>
      <Box width={'80%'} margin={'auto'}>
        <Typography fontSize={40}>
          Licensing
        </Typography>
      </Box>
      <Box textAlign={'start'} padding={'20px'} width={'80%'} margin={'auto'}>
        <Typography color={'#808080'} >
          FeedbackSense is a proprietary software application developed and owned by FeedbackSense. This page outlines the terms and conditions for the use of our software.
        </Typography>
        <Box marginTop={'20px'}></Box>
        <Typography variant='h6' color={'#006DFF'} >
          License Agreement
        </Typography>
        <Typography color={'#808080'} >
          By using FeedbackSense, you agree to be bound by the terms and conditions of this licensing agreement. This agreement grants you a non-exclusive, non-transferable license to use FeedbackSense for your internal business purposes.
        </Typography>

        <Typography variant='h6' color={'#006DFF'} >
          Permitted Use
        </Typography>
        <Typography color={'#808080'} >
          You may use FeedbackSense for creating and conducting surveys, collecting and analyzing feedback, and managing survey data. You may not use FeedbackSense for any unlawful or unauthorized purpose.
        </Typography>

        <Typography variant='h6' color={'#006DFF'} >
          Intellectual Property
        </Typography>
        <Typography color={'#808080'} >
          FeedbackSense and all related intellectual property rights, including but not limited to copyrights, trademarks, and trade secrets, are owned by FeedbackSense. You agree not to modify, reproduce, distribute, or create derivative works of FeedbackSense without prior written consent.
        </Typography>

        <Typography variant='h6' color={'#006DFF'} >
          Restrictions
        </Typography>
        <Typography color={'#808080'} >
          You are prohibited from reverse-engineering, decompiling, or disassembling FeedbackSense or attempting to discover its underlying source code. You may not remove or alter any proprietary notices or labels displayed in FeedbackSense.
        </Typography>

        <Typography variant='h6' color={'#006DFF'} >
          Support and Updates
        </Typography>
        <Typography color={'#808080'} >
          We may provide support services and periodic updates for FeedbackSense. The availability and scope of these services and updates may vary and are subject to change without notice.
        </Typography>

        <Typography variant='h6' color={'#006DFF'} >
          Termination
        </Typography>
        <Typography color={'#808080'} >
          This license agreement is effective until terminated. We reserve the right to terminate your license if you breach any of the terms and conditions outlined herein. Upon termination, you must cease all use of FeedbackSense and destroy any copies in your possession.
        </Typography>

        <Typography variant='h6' color={'#006DFF'} >
          Disclaimer of Warranty
        </Typography>
        <Typography color={'#808080'} >
          FeedbackSense is provided "as is" without any warranty, express or implied. We disclaim any warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not guarantee the accuracy, completeness, or reliability of FeedbackSense or its results.
        </Typography>

        <Typography variant='h6' color={'#006DFF'} >
          Limitation of Liability
        </Typography>
        <Typography color={'#808080'} >
          In no event shall FeedbackSense be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with the use or performance of FeedbackSense, even if advised of the possibility of such damages.
        </Typography>

        <Typography variant='h6' color={'#006DFF'} >
          Governing Law
        </Typography>
        <Typography color={'#808080'} >
          This license agreement is governed by the laws of India. Any disputes arising from the use of FeedbackSense shall be subject to the exclusive jurisdiction of the courts in India.
        </Typography>

        <Typography variant='h6' color={'#006DFF'} >
          Modifications
        </Typography>
        <Typography color={'#808080'} >
          We reserve the right to modify this licensing agreement at any time. Any changes will be effective upon posting on our website. Your continued use of FeedbackSense after the posting of changes constitutes your acceptance of the modified agreement.
        </Typography>

      </Box>
    </Box>
  )
}

export default Licensing