import DoctorSideNav from '../../components/DoctorSideNav';
import { Box, Button, Grid, Link, TextField, Typography, Select, MenuItem, InputLabel, FormControl, SelectChangeEvent } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useLoaderData, useNavigate } from "react-router-dom";
import { LineChart } from '@mui/x-charts/LineChart';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function BMIdetailConsultant() {

  const navigate = useNavigate();

  const [orders, setOrders] = useState<any[]>([]);

  const [students, setStudents] = useState<any[]>([]);
  const [xAxisArray, setXaxisArray] = useState<any[]>([]);
  const [bmiArray, setBmiArray] = useState<any[]>([]);
  const [studentObject, setStudentObject] = useState<any>({});

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
    const res = axios.get("http://localhost:8080/catering/students/report/" + studentId, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      let xAxisArr = [];
      let bmiArr = [];
      let data = response.data;
      for (var ind in data) {
        xAxisArr.push(data[ind].dateString);
        bmiArr.push(data[ind].bmi);
      }
      setXaxisArray(xAxisArr);
      setBmiArray(bmiArr);
    });
    const res2 = axios.get("http://localhost:8080/catering/students/" + studentId, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      setStudentObject(response.data);
      console.log(response.data);
    });

    const res3 = axios.get("http://localhost:8080/catering/guardians/order/" + studentId, {
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
            <DoctorSideNav title='BMI Details'/>
            <Box component="div" sx={{ flexGrow: 1, p: 3 }}>
              <Box textAlign={'center'}>
                  <Typography lineHeight={3} component="h1" variant="h4">
                      BMI Details
                  </Typography>
              </Box>

              <Box textAlign={'left'}>
                  <Typography lineHeight={2} component="h6" variant="subtitle2">
                    Report Of {studentObject?.firstName} {studentObject?.lastName}
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
                      <Box>
                        <h5>Student Name : {studentObject?.firstName} {studentObject?.lastName}</h5>
                        <h5>Index Number : {studentObject?.indexNumber}</h5>
                        <h5>Guarding Name : {studentObject.guardian?.firstName} {studentObject.guardian?.lastName}</h5> 
                      </Box>
                    </Grid>
                    <Grid item xs={6} sm={6} />

                    <Grid item xs={6} sm={6}>                         
                      <LineChart
                        xAxis={[{ data: xAxisArray, scaleType: 'point' }]}
                        series={[{ data: bmiArray }]}
                        width={500}
                        height={300}
                      />
                    </Grid>
                    <Grid item xs={6} sm={6} />

                    <Grid item xs={6} sm={6}>
                      <Box>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Name</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {orders.map((order) => (
                                    <TableRow
                                    key={order.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                    <TableCell>{order.date}</TableCell>
                                    <TableCell>{order.menu.name}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                      </Box>
                    </Grid>
                    <Grid item xs={6} sm={6} />

                </Grid>



              </Box>
            </Box>
          </Box>
    </>
  )
}

export default BMIdetailConsultant