import { Box } from '@mui/material'
import React from 'react'
import CateringManagerSideNav from '../../components/CateringManagerSideNav'

export default function AddMenuItems() {
  return (
        <>
            <Box sx={{ display: 'flex', marginTop: '60px' }}>
                <CateringManagerSideNav title='Add Menu Items' />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <h1>CCCCCCCCCCCCCCCC</h1>
                </Box>
            </Box>
        
        </>
     )
}
