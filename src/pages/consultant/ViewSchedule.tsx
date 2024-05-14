import DoctorSideNav from '../../components/DoctorSideNav';
import { Box, Button, Grid, Link, TextField, Typography, Select, MenuItem, InputLabel, FormControl, SelectChangeEvent } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { LineChart } from '@mui/x-charts/LineChart';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ViewSchedule() {

  const navigate = useNavigate();

  const { scheduleId } = useParams();

  const [orders, setOrders] = useState<any[]>([]);
  const [consultSchedule, setConsultSchedule] = useState<any>({});

  const [students, setStudents] = useState<any[]>([]);
  const [xAxisArray, setXaxisArray] = useState<any[]>([]);
  const [bmiArray, setBmiArray] = useState<any[]>([]);
  const [studentObject, setStudentObject] = useState<any>({});

  useEffect(() => {
    const res = axios.get("http://localhost:8080/catering/schedules/" + scheduleId, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      setConsultSchedule(response.data);
      loadReport(response.data?.student.id);
    });
  }, []);


  const loadReport = function(studentId: any) {

    axios.get("http://localhost:8080/catering/students/report/" + studentId, {
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
    
    axios.get("http://localhost:8080/catering/students/" + studentId, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      setStudentObject(response.data);
      console.log(response.data);
    });

    axios.get("http://localhost:8080/catering/guardians/order/" + studentId, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      setOrders(response.data);
    });

  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const json = JSON.stringify(data.get('conclusion'));
    console.log(json);
    axios.put("http://localhost:8080/catering/schedules/" + scheduleId, json, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      Swal.fire({
        icon: "success",
        title: "The schedule has been updated successfully",
        showConfirmButton: false,
        timer: 1500
      });
      // navigate('/guardian');
    });
  };

  return (
    <>
      <Box sx={{ display: 'flex', marginTop: '60px' }}>
        <DoctorSideNav title='BMI Details' />
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
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={2} rowSpacing={5} marginTop={5}>
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

              <Grid item xs={6} sm={6}>
                <Box>
                  <Grid container marginTop={5}>
                      <Grid item xs={12} sm={12}>
                          <TextField
                              size='small'
                              name="conclusion"
                              required
                              fullWidth
                              multiline
                              rows={5}
                              id="conclusion"
                              label="Conclusion"
                              autoFocus
                          />
                      </Grid>
                      <Grid item xs={6} sm={6} />
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} />
              <Grid item xs={6} sm={6}>
                <Button
                    type="submit"
                    variant="contained"
                >Submit</Button>
              </Grid>
              <Grid item xs={6} sm={6} />

            </Grid>



          </Box>
        </Box>
      </Box>
    </>
  )
}