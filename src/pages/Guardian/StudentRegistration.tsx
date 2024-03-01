import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material';
import React from 'react';
import SideNav from '../../components/GuardianSideNav';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import axios from 'axios';

export default function StudentRegistration() {

    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      let userStr = localStorage.getItem('CATERING_LOGIN_USER') || '{}';
      let userObj = JSON.parse(userStr);
      localStorage.getItem("CATERING_LOGIN_USER");
      const json = JSON.stringify({
        firstName: data.get('firstName'),
        lastName: data.get('lastName'),
        indexNumber: data.get('indexNumber'),
        guardianId: userObj.userId
      });
      console.log(json);
      const res = axios.post("http://localhost:8080/catering/students", json, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        Swal.fire({
          icon: "success",
          title: "The student has been registered successfully",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/guardian');
      });
    };

    return (
        <>
            <Box sx={{ display: 'flex', marginTop: '60px' }} component="form" onSubmit={handleSubmit}>
                <SideNav title='Student Registration' />
                <Box component="div" sx={{ flexGrow: 1, p: 3 }}>
                    <Box textAlign={'center'}>
                        <Typography lineHeight={3} component="h1" variant="h4">
                            Student Registration...
                        </Typography>
                    </Box>
                    <Box component="div">
                        <Grid container spacing={2} rowSpacing={5} marginTop={5}>
                            <Grid item xs={6} sm={6}>
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
                            <Grid item xs={6} sm={6} />
                            <Grid item xs={6} sm={6}>
                                <TextField
                                    size='small'
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                />
                            </Grid>
                            <Grid item xs={6} sm={6} />
                            <Grid item xs={6} sm={6}>
                                <TextField
                                    size='small'
                                    name="indexNumber"
                                    required
                                    fullWidth
                                    id="indexNumber"
                                    label="Student Index No:"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={6} sm={6} />
                        </Grid>

                    </Box>
                    <Box textAlign={'left'}>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >Submit</Button>
                    </Box>
                </Box>

            </Box>
        </>
    )
}
