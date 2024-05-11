import { Box, Grid, Rating, Typography } from '@mui/material'
import React from 'react'
import GuardianSideNav from '../../components/GuardianSideNav';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function MenuDetail() {

    const [menu, setMenu] = React.useState<any>({});

    const { menuId } = useParams();

    useEffect(() => {

        const res = axios.get("http://localhost:8080/catering/menus/" + menuId , {
            headers: {
            'Content-Type': 'application/json'
            }
        }).then((response) => {
          setMenu(response.data);
        });

    }, []);

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
                                src={'/images/no-image.png'}
                                alt={''}
                                loading="lazy"
                                width={400}
                                height={400}
                            />
                            <Box>
                                {menu.items?.map((menuItem: any) => (
                                    <img
                                        srcSet={''}
                                        src={'/images/no-image.png'}
                                        alt={''}
                                        loading="lazy"
                                        width={100}
                                        height={100}
                                    />
                                ))}
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ width: '100%', maxWidth: 500, marginTop: 10 }}>
                                <Typography variant="h4" gutterBottom>
                                    {menu.name}
                                </Typography>
                                <Typography variant="h6" gutterBottom>
                                    {menu.description}
                                </Typography>
                                <br/>
                                {menu.items?.map((menuItem: any) => (
                                    <div>
                                        <Typography variant="h5" gutterBottom>
                                            {menuItem.name}
                                        </Typography>
                                        <Typography variant="h6" gutterBottom>
                                            {menuItem.nutrition}
                                        </Typography>
                                    </div>
                                ))}

                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}
