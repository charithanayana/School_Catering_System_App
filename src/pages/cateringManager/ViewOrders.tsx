import { Box, Button, Grid, Link, ListItem, SelectChangeEvent, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import CateringManagerSideNav from '../../components/CateringManagerSideNav';

export default function ViewOrders() {

    const [orders, setOrders] = useState<any[]>([]);
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let date = data.get('date');
        axios.get("http://localhost:8080/catering/caterings/order/" + date, {
            headers: {
            'Content-Type': 'application/json'
            }
        }).then((response) => {
            setOrders(response.data);
        });    
    };

    return (
        <>
            <Box sx={{ display: 'flex', marginTop: '60px' }} component="form" onSubmit={handleSubmit}>
                <CateringManagerSideNav title='Add Menu' />
                <Box component="div" sx={{ flexGrow: 1, p: 3 }}>
                    <Box textAlign={'center'}>
                        <Typography lineHeight={3} component="h1" variant="h4">
                            View Orders
                        </Typography>
                    </Box>
                    <Box component="div">
                        <Grid container spacing={2} rowSpacing={5} marginTop={5}>
                            <Grid item xs={4} sm={4}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker']} >
                                        <DatePicker 
                                        label="Basic date picker"
                                        name="date"
                                        format="YYYY-MM-DD"
                                        />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >Submit</Button>
                            </Grid>
                            <Grid item xs={6} sm={6} />
                            <Grid item xs={6} sm={6}>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Id</TableCell>
                                            <TableCell>Date</TableCell>
                                            <TableCell>Student</TableCell>
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
                                                <TableCell>{order.student.firstName} {order.student.lastName}</TableCell>
                                                <TableCell>{order.menu.id} - {order.menu.name}</TableCell>
                                                <TableCell>
                                                {order.menu?.items.map((item: any) => (
                                                    <ListItem>
                                                        {item.id} - {item.name}
                                                    </ListItem>
                                                ))}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            </Grid>
                            <Grid item xs={6} sm={6} />
                        </Grid>

                    </Box>
                </Box>

            </Box>
        </>
    )

}
