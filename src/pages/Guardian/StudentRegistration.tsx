import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import SideNav from '../../components/GuardianSideNav'

export default function StudentRegistration() {
    return (
        <>
            <Box sx={{ display: 'flex', marginTop: '60px' }}>
                <SideNav title='Student Registration' />
                <Box component="div" sx={{ flexGrow: 1, p: 3 }}>
                    <Box textAlign={'center'}>
                        <Typography lineHeight={3} component="h1" variant="h4">
                            Student Registration...
                        </Typography>
                    </Box>
                    <Box component="div" sx={{ display: 'flex' }}>
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
                            <Grid xs={2} sm={2} />
                            <Grid item xs={4} sm={4}>
                                <TextField
                                    size='small'
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Student Index No:"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={4} sm={4}>
                                <TextField
                                    size='small'
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Date of Birth"
                                    name="lastName"
                                />
                            </Grid>
                            <Grid xs={2} sm={2} />
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

            </Box>
        </>
    )
}
