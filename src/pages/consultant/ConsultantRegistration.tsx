import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import axios from 'axios';
import SchoolAdminSideNav from '../../components/SchoolAdminSideNav';

export default function ConsultantRegistration() {

    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const json = JSON.stringify({
        firstName: data.get('firstName'),
        lastName: data.get('lastName'),
        mobile: data.get('mobile'),
        hospital: data.get('hospital'),
        userName: data.get('userName'),
        password: data.get('password')
      });
      console.log(json);
      axios.post("http://localhost:8080/catering/consultants", json, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        Swal.fire({
          icon: "success",
          title: "The consultant has been registered successfully",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/schoolAdmin/consultant/list');
      });
    };

    return (
        <>
            <Box sx={{ display: 'flex', marginTop: '60px' }} component="form" onSubmit={handleSubmit}>
                <SchoolAdminSideNav title='Consultant Registration' />
                <Box component="div" sx={{ flexGrow: 1, p: 3 }}>
                    <Box textAlign={'center'}>
                        <Typography lineHeight={3} component="h1" variant="h4">
                            Consultant Registration...
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
                                    name="mobile"
                                    required
                                    fullWidth
                                    id="mobile"
                                    label="Mobile:"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={6} sm={6} />
                            <Grid item xs={6} sm={6}>
                                <TextField
                                    size='small'
                                    name="hospital"
                                    required
                                    fullWidth
                                    id="hospital"
                                    label="Hospital:"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={6} sm={6} />
                            <Grid item xs={6} sm={6}>
                                <TextField
                                    size='small'
                                    name="userName"
                                    required
                                    fullWidth
                                    id="userName"
                                    label="User Name:"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={6} sm={6} />
                            <Grid item xs={6} sm={6}>
                                <TextField
                                    size='small'
                                    name="password"
                                    required
                                    fullWidth
                                    type="password"
                                    id="password"
                                    label="Password:"
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
