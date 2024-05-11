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

export default function StudentList() {


    let userStr = localStorage.getItem('CATERING_LOGIN_USER') || '{}';
    let userObj = JSON.parse(userStr);
    // let students : any[] = [];
    const [students, setStudents] = useState<any[]>([]);

    useEffect(() => {
        const res = axios.get("http://localhost:8080/catering/students/guardian/" + userObj.userId, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            setStudents(response.data);
        });
    }, []);



    return (
        <>
            <Box sx={{ display: 'flex', marginTop: '60px' }}>
                <SideNav title='Student Registration' />
                <Box component="div" sx={{ flexGrow: 1, p: 3 }}>
                    <Box textAlign={'center'}>
                        <Typography lineHeight={3} component="h1" variant="h4">
                            Student List
                        </Typography>
                    </Box>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell>Firt Name</TableCell>
                                    <TableCell>Last Name</TableCell>
                                    <TableCell>Index Number</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {students.map((student) => (
                                    <TableRow
                                        key={student.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell>{student.id}</TableCell>
                                        <TableCell>{student.firstName}</TableCell>
                                        <TableCell>{student.lastName}</TableCell>
                                        <TableCell>{student.indexNumber}</TableCell>
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
