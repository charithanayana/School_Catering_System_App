import { Box, Grid, TextField } from '@mui/material'
import React from 'react'
import CateringManagerSideNav from '../../components/CateringManagerSideNav'

export default function AddMenuPage() {
    return (
        <>
            <Box sx={{ display: 'flex', marginTop: '60px' }}>
                <CateringManagerSideNav title='Add Menu' />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Grid container spacing={2} rowSpacing={5} marginTop={5}>
                            <Grid xs={2} sm={2} />
                            <Grid item xs={4} sm={4}>
                                <TextField
                                    size='small'
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={4} sm={4}>
                                <TextField
                                    size='small'
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                />
                            </Grid>
                            <Grid xs={2} sm={2} />
                            </Grid>
                </Box>
            </Box>
        </>
    )
}
