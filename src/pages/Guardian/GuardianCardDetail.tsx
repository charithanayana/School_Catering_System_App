import { Box, Grid, Rating, Typography } from '@mui/material'
import React from 'react'
import GuardianAdmin from './GuardianHomePage';
import GuardianSideNav from '../../components/GuardianSideNav';

export default function GuardianCardDetail() {
    const [value, setValue] = React.useState<number | null>(2);
    return (
        <>
            <Box sx={{ display: 'flex', marginTop: '60px' }}>
                <GuardianSideNav title='Menu Item'/>
                <Box component="div" sx={{ flexGrow: 1, p: 3 }}>
                    <Grid container spacing={2}></Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <img
                                srcSet={''}
                                src={'https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg'}
                                alt={''}
                                loading="lazy"
                                width={400}
                                height={400}
                            />
                            <Box>
                                <img
                                    srcSet={''}
                                    src={'https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg'}
                                    alt={''}
                                    loading="lazy"
                                    width={100}
                                    height={100}
                                />
                                <img
                                    srcSet={''}
                                    src={'https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg'}
                                    alt={''}
                                    loading="lazy"
                                    width={100}
                                    height={100}
                                />
                                <img
                                    srcSet={''}
                                    src={'https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg'}
                                    alt={''}
                                    loading="lazy"
                                    width={100}
                                    height={100}
                                />
                                <img
                                    srcSet={''}
                                    src={'https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg'}
                                    alt={''}
                                    loading="lazy"
                                    width={100}
                                    height={100}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ width: '100%', maxWidth: 500, marginTop: 10 }}>
                                <Typography variant="h4" gutterBottom>
                                    Cupiri Banis
                                </Typography>
                                <Rating
                                    name="simple-controlled"
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                                <Typography variant="h5" gutterBottom>
                                    h5. Heading
                                </Typography>
                                <Typography variant="h6" gutterBottom>
                                    Description
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                    quasi quidem quibusdam.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}
