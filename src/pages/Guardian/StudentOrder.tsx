import React from 'react';
import SideNav from '../../components/GuardianSideNav';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Grid, Link, TextField, Typography, Select, MenuItem, InputLabel, FormControl, SelectChangeEvent } from '@mui/material';
import { useEffect, useState } from 'react';

export default function StudentOrder() {

    let userStr = localStorage.getItem('CATERING_LOGIN_USER') || '{}';
    let userObj = JSON.parse(userStr);
    // let students : any[] = [];


    const [students, setStudents] = useState<any[]>([]);
    const [orders, setOrders] = useState<any[]>([]);
  
    useEffect(() => {
      const res = axios.get("http://localhost:8080/catering/students", {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        setStudents(response.data);
      });
    }, []);

    const handleChange = (event: SelectChangeEvent) => {
        let studentId = event.target.value;
        const res = axios.get("http://localhost:8080/catering/guardians/order/" + studentId, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => {
            setOrders(response.data);
        });
      };

      return (
        <>
            <Box sx={{ display: 'flex', marginTop: '60px' }}>
                <SideNav title='Student Registration' />
                <Box component="div" sx={{ flexGrow: 1, p: 3 }}>
                    <Box textAlign={'center'}>
                        <Typography lineHeight={3} component="h1" variant="h4">
                            Student Orders
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
                  </Grid>

                </Box>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Date</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {orders.map((order) => (
                                <TableRow
                                key={order.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell>{order.id}</TableCell>
                                <TableCell>{order.menu.name}</TableCell>
                                <TableCell>{order.date}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>

            </Box>
        </>
    )

}
