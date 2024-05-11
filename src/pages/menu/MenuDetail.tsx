import { Box, Grid, Button, Typography, TextField, Card, CardContent } from '@mui/material'
import React from 'react'
import GuardianSideNav from '../../components/GuardianSideNav';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";


export default function MenuDetail() {

    const navigate = useNavigate();

    const [menu, setMenu] = React.useState<any>({});
    const [feedbacks, setFeedbacks] = React.useState<any>([]);

    const { menuId } = useParams();

    let userStr = localStorage.getItem('CATERING_LOGIN_USER') || '{}';
    let userObj = JSON.parse(userStr);

    useEffect(() => {

        const res = axios.get("http://localhost:8080/catering/menus/" + menuId , {
            headers: {
            'Content-Type': 'application/json'
            }
        }).then((response) => {
          setMenu(response.data);
        });

        axios.get("http://localhost:8080/catering/feedbacks/" + menuId , {
            headers: {
            'Content-Type': 'application/json'
            }
        }).then((response) => {
          setFeedbacks(response.data);
        });

    }, []);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const json = JSON.stringify({
          feedback: data.get('feedback'),
          menuId: menuId,
          guardianId: userObj.userId
        });
        
        axios.post("http://localhost:8080/catering/feedbacks", json, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => {
          Swal.fire({
            icon: "success",
            title: "The feedback added to the menu successfully",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/menu');
        });
      };

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
                    <Grid item xs={12} component="form" onSubmit={handleSubmit}>
                    {(userObj && userObj.userType === "GUARDIAN") ? (
                        <div>
                            <Typography variant="h5" gutterBottom>
                                User Feedback
                            </Typography>
                            <TextField
                                id='feedback'
                                rows={5}
                                fullWidth
                                multiline
                                name="feedback"
                            >
                            </TextField>
                            <div>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >Submit</Button>
                            </div>
                        </div>
                    ):(<div/>)}
                            <div>
                                {feedbacks.map((feedback: any) => (
                                    <Card>
                                    
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                        {feedback.feedback}
                                        </Typography>
                                        <Typography gutterBottom sx={{ fontSize: 12}}>
                                            By {feedback.guardian.firstName} {feedback.guardian.lastName} on {feedback.date}
                                        </Typography>
                                    </CardContent>
                                    </Card>
                                ))}
                            </div>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}
