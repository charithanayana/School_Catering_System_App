import { Box, Card, CardContent, Typography } from '@mui/material'
import Grid from '@mui/material/Grid';
import DoctorSideNav from '../../components/DoctorSideNav';

function DoctorAdmin() {
  return (  
    <>
      <Box sx={{ display: 'flex', marginTop: '60px' }}>
        <DoctorSideNav title='DoctorAdmin'/>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ maxWidth: 345 }}>
             
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Doctor Administration Functions
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

export default DoctorAdmin