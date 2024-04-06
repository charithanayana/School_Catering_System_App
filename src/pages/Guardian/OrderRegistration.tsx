import React from 'react';
import SideNav from '../../components/GuardianSideNav';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import axios from 'axios';
import { Box, Button, Grid, Link, TextField, Typography, Select, MenuItem, InputLabel, FormControl, SelectChangeEvent } from '@mui/material';
import { useEffect, useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function OrderRegistration() {

    const navigate = useNavigate();

    const [students, setStudents] = useState<any[]>([]);
    const [menus, setMenus] = useState<any[]>([]);

    let userStr = localStorage.getItem('CATERING_LOGIN_USER') || '{}';
    let userObj = JSON.parse(userStr);

    useEffect(() => {

        const res = axios.get("http://localhost:8080/catering/students/guardian/" + userObj.userId , {
            headers: {
            'Content-Type': 'application/json'
            }
        }).then((response) => {
            setStudents(response.data);
        });

        const res2 = axios.get("http://localhost:8080/catering/menus" , {
            headers: {
            'Content-Type': 'application/json'
            }
        }).then((response) => {
            setMenus(response.data);
        });

    }, []);


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const json = JSON.stringify({
        studentId: data.get('studentId'),
        date: data.get('date'),
        menuId: data.get('menuId')
      });
      const res = axios.post("http://localhost:8080/catering/guardians/order", json, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        Swal.fire({
          icon: "success",
          title: "The student order has been registered successfully",
          showConfirmButton: false,
          timer: 1500
        });
      });
    };

    const handleChange = (event: SelectChangeEvent) => {
        let studentId = event.target.value;
        const res = axios.get("http://localhost:8080/catering/students/report/" + studentId, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => {

        });
      };

    return (
        <>
            <Box sx={{ display: 'flex', marginTop: '60px' }} component="form" onSubmit={handleSubmit}>
                <SideNav title='Order Registration' />
                <Box component="div" sx={{ flexGrow: 1, p: 3 }}>
                    <Box textAlign={'center'}>
                        <Typography lineHeight={3} component="h1" variant="h4">
                            Order Registration
                        </Typography>
                    </Box>
                    <Box component="div">
                        <Grid container spacing={2} rowSpacing={5} marginTop={5}>
                            <Grid item xs={6} sm={6}>
                                <FormControl sx={{ width: 1 }}>
                                    <InputLabel id="demo-simple-select-helper-label">Student</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    label="mmmb"
                                    size='small'
                                    name="studentId"
                                    onChange={handleChange}
                                    >
                                    <MenuItem key="-1" value="">Please select</MenuItem>
                                    {students.map((student) => (
                                        <MenuItem value={student.id}>{student.firstName}</MenuItem>
                                    ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} sm={6} />
                            <Grid item xs={6} sm={6}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker']}>
                                        <DatePicker 
                                        label="Basic date picker"
                                        name="date"
                                        format="YYYY-MM-DD"
                                        />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={6} sm={6} />
                            <Grid item xs={6} sm={6}>
                                <FormControl sx={{ width: 1 }}>
                                    <InputLabel id="demo-simple-select-helper-label">Menu</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    label="mmmb"
                                    size='small'
                                    name="menuId"
                                    >
                                    <MenuItem key="-1" value="">Please select</MenuItem>
                                    {menus.map((menu) => (
                                        <MenuItem value={menu.id}>{menu.name}</MenuItem>
                                    ))}
                                    </Select>
                                </FormControl>
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
