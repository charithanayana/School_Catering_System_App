import { Box } from '@mui/material'
import React from 'react'
import GuardianSideNav from '../../components/GuardianSideNav'

export default function BmiChart() {
  return (
         <>
             <Box sx={{ display: 'flex', marginTop: '60px' }}>
                 <GuardianSideNav title='BMI Chart' />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                         <h1>BMI Chart Details</h1>
                </Box>
              </Box>

        </>
    )
}
