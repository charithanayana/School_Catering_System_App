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

import * as React from 'react';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Catering Service
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function ParentRegister() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
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
              <Grid item xs={6}>
                <TextField
                  size='small'
                  required
                  fullWidth
                  id="telNo"
                  label="Telephone Number"
                  name="telNo"
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  placeholder="Address"
                  size='small'
                  minRows={2}
                  maxRows={3}
                  fullWidth
                  label="Address"
                  name='adress'
                />
              </Grid>
              <Grid item xs={6} sm={6}>
                <TextField
                  size='small'
                  required
                  fullWidth
                  id="userName"
                  label="User Name"
                  name="userName"
                />
              </Grid>
              <Grid item xs={6}>
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
            </Grid>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
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