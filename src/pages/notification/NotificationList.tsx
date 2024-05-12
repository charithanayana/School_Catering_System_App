import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import SideNav from '../../components/GuardianSideNav';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import axios from 'axios';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SchoolAdminSideNav from '../../components/SchoolAdminSideNav';

export default function NotificationList() {

    const [notifications, setNotifications] = useState<any[]>([]);

    let userStr = localStorage.getItem('CATERING_LOGIN_USER') || '{}';
    let userObj = JSON.parse(userStr);

    useEffect(() => {
        axios.get("http://localhost:8080/catering/notifications/" + userObj.id, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            setNotifications(response.data);
        });
    }, []);



    return (
        <>
            <Box sx={{ display: 'flex', marginTop: '60px' }}>
                <SchoolAdminSideNav title='Notifications' />
                <Box component="div" sx={{ flexGrow: 1, p: 3 }}>
                    <Box textAlign={'center'}>
                        <Typography lineHeight={3} component="h1" variant="h4">
                            Notifications
                        </Typography>
                    </Box>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Message</TableCell>
                                    <TableCell>Date</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {notifications.map((notification) => (
                                    <TableRow
                                        key={notification.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell>{notification.id}</TableCell>
                                        <TableCell>{notification.notification.title}</TableCell>
                                        <TableCell>{notification.notification.message}</TableCell>
                                        <TableCell>{notification.notification.date}</TableCell>
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
