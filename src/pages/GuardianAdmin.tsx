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
          Gurdian Administraion Functions
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