import { Box, Button, Grid, ListItem, SelectChangeEvent, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
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
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import DoctorSideNav from '../../components/DoctorSideNav';

export default function ViewConsultantSchedule() {

    const [schedules, setSchedules] = useState<any[]>([]);
    
    useEffect(() => {
        axios.get("http://localhost:8080/catering/schedules?status=PENDING", {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => {
            setSchedules(response.data);
        });
    }, []);

    return (
        <>
            <Box sx={{ display: 'flex', marginTop: '60px' }}>
                <DoctorSideNav title="Consultant Page"/>
                <Box component="div" sx={{ flexGrow: 1, p: 3 }}>
                    <Box textAlign={'center'}>
                        <Typography lineHeight={3} component="h1" variant="h4">
                            Generate Consultant Schedule
                        </Typography>
                    </Box>
                    <Box component="div">
                        <Grid container spacing={2} rowSpacing={5} marginTop={5}>
                            <Grid item xs={6} sm={6}>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Id</TableCell>
                                            <TableCell>Date</TableCell>
                                            <TableCell>Student</TableCell>
                                            <TableCell>Consultant</TableCell>
                                            <TableCell>Status</TableCell>
                                            <TableCell></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {schedules.map((schedule) => (
                                            <TableRow
                                                key={schedule.id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell>{schedule.id}</TableCell>
                                                <TableCell>{schedule.date}</TableCell>
                                                <TableCell>{schedule.student.firstName} {schedule.student.lastName}</TableCell>
                                                <TableCell>{schedule.consultant.firstName} {schedule.consultant.lastName}</TableCell>
                                                <TableCell>{schedule.status}</TableCell>
                                                <TableCell>
                                                    <Link to={`/consultant/schedule/${schedule.id}`}>View</Link>
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
