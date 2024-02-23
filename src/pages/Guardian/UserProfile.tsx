import { Box } from '@mui/material'
import React from 'react'
import GuardianSideNav from '../../components/GuardianSideNav'

export default function UserProfile() {
  return (
         <>
             <Box sx={{ display: 'flex', marginTop: '60px' }}>
                 <GuardianSideNav title='User Profile' />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                         <h1>User Profile</h1>
                </Box>
              </Box>

        </>
  )
}
