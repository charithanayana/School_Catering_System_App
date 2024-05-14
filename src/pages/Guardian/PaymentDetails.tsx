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
import { Box, Button, Grid, Link, TextField, Typography, Select, MenuItem, InputLabel, FormControl, SelectChangeEvent, ListItem } from '@mui/material';
import { useEffect, useState } from 'react';

export default function PaymentDetails() {

    const navigate = useNavigate();

    const [students, setStudents] = useState<any[]>([]);
    const [orders, setOrders] = useState<any[]>([]);
    const [total, setTotal] = useState<number>(0);
  
    useEffect(() => {
      axios.get("http://localhost:8080/catering/students", {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        setStudents(response.data);
      });
    }, []);

    const handleChange = (event: SelectChangeEvent) => {
        let studentId = event.target.value;
        axios.get("http://localhost:8080/catering/guardians/order/" + studentId + "?payType=NOT_PAID", {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => {
            setOrders(response.data);
            let total = response.data.reduce((preVal: number, currVal: any) => {
              let itemTotals = currVal.menu?.items.reduce((pVal: number, cVal: any) => {
                return pVal + cVal.price;
              }, 0);
              return itemTotals + preVal + currVal.menu.price;
            }, 0);
            setTotal(total);
        });
      };

      const handleClick = () => {
        alert(0)
        let arr = [];
        for (var i = 0; i < orders.length; i++) {
          arr.push(orders[i].id);
        }
        axios.post("http://localhost:8080/catering/guardians/pay-order", JSON.stringify(arr), {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => {
          Swal.fire({
            icon: "success",
            title: "The payment done successfully",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/guardian/orders');
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
                <Box component="div" sx={{ marginTop: 5 }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Menu</TableCell>
                                    <TableCell>Menu Items</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {orders.map((order) => (
                                <TableRow
                                key={order.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                  <TableCell>{order.id}</TableCell>
                                  <TableCell>{order.date}</TableCell>
                                  <TableCell>{order.menu.name} - {order.menu.price}</TableCell>
                                  <TableCell>
                                    {order.menu?.items.map((item: any) => (
                                      <ListItem>{item.name} - {item.price}</ListItem>
                                    ))}
                                  </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <Box component="div" sx={{ marginTop: 5 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleClick()}
                  >Pay Total - RS. {total}</Button>
                </Box>
              </Box>

            </Box>
        </>
    )

}
