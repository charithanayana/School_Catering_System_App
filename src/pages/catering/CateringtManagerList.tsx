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

export default function CateringtManagerList() {

    const [cManagers, setCManagers] = useState<any[]>([]);

    useEffect(() => {
        axios.get("http://localhost:8080/catering/caterings", {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            setCManagers(response.data);
        });
    }, []);



    return (
        <>
            <Box sx={{ display: 'flex', marginTop: '60px' }}>
                <SchoolAdminSideNav title='Catering Manager List' />
                <Box component="div" sx={{ flexGrow: 1, p: 3 }}>
                    <Box textAlign={'center'}>
                        <Typography lineHeight={3} component="h1" variant="h4">
                            Catering Manager List
                        </Typography>
                    </Box>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell>Firt Name</TableCell>
                                    <TableCell>Last Name</TableCell>
                                    <TableCell>Mobile Number</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cManagers.map((cManager) => (
                                    <TableRow
                                        key={cManager.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell>{cManager.id}</TableCell>
                                        <TableCell>{cManager.firstName}</TableCell>
                                        <TableCell>{cManager.lastName}</TableCell>
                                        <TableCell>{cManager.mobile}</TableCell>
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
