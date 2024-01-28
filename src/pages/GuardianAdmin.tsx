import React from 'react'
import { Link } from 'react-router-dom'
import SideNav from '../components/GuardianSideNav'
import { Box, TextField, Typography } from '@mui/material'

function GuardianAdmin() {
  return (
    <>
      <Box sx={{ display: 'flex', marginTop: '60px'}}>
        <SideNav />
        <h1>Guardian Admin</h1>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. 
        </Typography>
        <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        size='small'
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        />
      </Box>
      </Box>
    </>
  )
}

export default GuardianAdmin