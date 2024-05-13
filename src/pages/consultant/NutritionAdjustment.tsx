import { Box, Card, CardContent, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Slider, Typography } from '@mui/material'
import Grid from '@mui/material/Grid';
import DoctorSideNav from '../../components/DoctorSideNav';
import { useState, useEffect, SetStateAction, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function DoctorAdmin() {

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



    });
    const res2 = axios.get("http://localhost:8080/catering/students/" + studentId, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      setStudentObject(response.data);
      console.log(response.data);
    });


  };

  const marks = [
    {
      value: 0,
      label: '0g',
    },
    {
      value: 20,
      label: '20g',
    },
    {
      value: 50,
      label: '50g',
    },
    
  ];


  function valuetext(value: number) {
    return `${value}°C`;
  }
  return (
    <>
      <Box sx={{ display: 'flex', marginTop: '60px' }}>
        <DoctorSideNav title='NutritionAdjustment' />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

          <Box textAlign={'center'}>
            <Typography lineHeight={3} component="h1" variant="h4">
              NUTRITION ADJUSTMENT
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
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default DoctorAdmin