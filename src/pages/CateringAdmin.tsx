import React from 'react'
import { Link } from 'react-router-dom'
import SideNav from '../components/GuardianSideNav'
import { Box, Card, CardContent, Typography } from '@mui/material'
import Grid from '@mui/material/Grid';
import GuardianSideNav from '../components/GuardianSideNav';

function CateringAdmin() {
  return (
    <>
      <Box sx={{ display: 'flex', marginTop: '60px' }}>
        <GuardianSideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ maxWidth: 345 }}>
             
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Catering Administration Functions
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>

            </Grid>
          </Grid>
          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={8}>

            </Grid>
            <Grid item xs={4}>

            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default CateringAdmin