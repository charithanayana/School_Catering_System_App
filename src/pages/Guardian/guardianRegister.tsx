import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import * as React from 'react';
import Swal from 'sweetalert2';
import swalWithBootstrapButtons from 'sweetalert2'


function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props} sx={{ marginBottom: 30 }}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        School Catering Service
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function ParentRegister() {
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get('password') !== data.get('confirmPassword')) {
      swalWithBootstrapButtons.fire({
        icon: "error",
        title: "Password doesn't match with confirm password",
        showConfirmButton: true
      });
      return;
    }
    const json = JSON.stringify({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      mobile: data.get('mobile'),
      email: data.get('email'),
      address: data.get('address'),
      userName: data.get('userName'),
      password: data.get('password'),
      confirmPassword: data.get('confirmPassword')
    });
    const res = axios.post("http://localhost:8080/catering/guardians", json, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      Swal.fire({
        icon: "success",
        title: "The user has been registered successfully",
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/guardian');
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography lineHeight={3} component="h1" variant="h5" letterSpacing={3}>
            Guardian Registration
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={2} rowSpacing={4}>
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
              <Grid item xs={6} sm={6}>
                <TextField
                  size='small'
                  required
                  fullWidth
                  id="telNo"
                  label="Mobile Number"
                  name="mobile"
                />
              </Grid>              
              <Grid item xs={6} sm={6}>
                <TextField
                  size='small'
                  required
                  fullWidth
                  id="eMail"
                  label="Email"
                  name="email"
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  name='address'
                  label="Address"
                  size='small'
                  fullWidth
                  multiline
                  rows={4}
                />
              </Grid>

              <Grid item xs={6}>

              </Grid>
            </Grid>
            <Grid container spacing={2} rowSpacing={4}>

              <Grid item xs={12} sm={12}>
                  <TextField
                    size='small'
                    required
                    fullWidth
                    name="userName"
                    label="User Name"
                    type="text"
                    id="userName"
                  />
              </Grid>
              <Grid item xs={12} sm={12}>
                  <TextField
                    size='small'
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
              </Grid>
              <Grid item xs={12} sm={12}>
                  <TextField
                    size='small'
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type="confirmPassword"
                    id="confirmPassword"
                    autoComplete="new-password"
                  />
              </Grid>
            </Grid>
            <Box textAlign={'center'}>
              <Button

                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
            </Box>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}