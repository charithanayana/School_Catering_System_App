import SchoolAdminSideNav from '../../components/SchoolAdminSideNav';
import { Box, Button, Grid, Link, TextField, Typography, Select, MenuItem, InputLabel, FormControl, SelectChangeEvent } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { LineChart } from '@mui/x-charts/LineChart';

function BMIdetail() {

  const navigate = useNavigate();

  const [students, setStudents] = useState<any[]>([]);
  const [xAxisArray, setXaxisArray] = useState<any[]>([]);
  const [bmiArray, setBmiArray] = useState<any[]>([]);

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
  };

  return (
    <>
        <Box sx={{ display: 'flex', marginTop: '60px' }}>
            <SchoolAdminSideNav title='BMI Details'/>
            <Box component="div" sx={{ flexGrow: 1, p: 3 }}>
              <Box textAlign={'center'}>
                  <Typography lineHeight={3} component="h1" variant="h4">
                      BMI Details
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

                    <Grid container spacing={2} rowSpacing={5} marginTop={5}>
                  <Grid item xs={6} sm={6}>                         
                    <LineChart
                      xAxis={[{ data: xAxisArray, scaleType: 'point' }]}
                      series={[{ data: bmiArray }]}
                      width={500}
                      height={300}
                    />
                  </Grid>
                  <Grid item xs={6} sm={6} />

              </Grid>

                </Grid>



              </Box>
            </Box>
          </Box>
    </>
  )
}

export default BMIdetail