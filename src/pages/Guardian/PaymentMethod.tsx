import { Box } from '@mui/material'
import React from 'react'
import GuardianSideNav from '../../components/GuardianSideNav'

export default function PaymentMethod() {
  return (
        <>
            <Box sx={{ display: 'flex', marginTop: '60px' }}>
                 <GuardianSideNav title='Payment Method' />
                     <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                         <h1>PAYMENT METHOD</h1>
                </Box>
            </Box>

         </>
     )
}
