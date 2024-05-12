import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import CateringManagerSideNav from '../../components/CateringManagerSideNav'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

export default function AddMenu() {

    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const json = JSON.stringify({
        name: data.get('name'),
        description: data.get('description'),
        price: data.get('price')
      });
      console.log(json);
      axios.post("http://localhost:8080/catering/menus", json, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        Swal.fire({
          icon: "success",
          title: "The menu has been registered successfully",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/catering-manager/addMenu');
      });
    };

    return (
        <>
            <Box sx={{ display: 'flex', marginTop: '60px' }} component="form" onSubmit={handleSubmit}>
                <CateringManagerSideNav title='Add Menu' />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

                    <Box component="div">
                        <Grid container spacing={2} rowSpacing={5} marginTop={5}>
                            <Grid item xs={6} sm={6}>
                                <TextField
                                    size='small'
                                    name="name"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={6} sm={6} />
                            <Grid item xs={6} sm={6}>
                                <TextField
                                    size='small'
                                    required
                                    fullWidth
                                    multiline
                                    rows={5}
                                    id="description"
                                    label="Description"
                                    name="description"
                                />
                            </Grid>
                            <Grid item xs={6} sm={6} />
                            <Grid item xs={6} sm={6}>
                                <TextField
                                    size='small'
                                    name="price"
                                    required
                                    fullWidth
                                    id="price"
                                    label="Price"
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
