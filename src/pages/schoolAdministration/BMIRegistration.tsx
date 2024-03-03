import SchoolAdminSideNav from '../../components/SchoolAdminSideNav';
import { Box, Button, Grid, Link, TextField, Typography, Select, MenuItem, InputLabel, FormControl, SelectChangeEvent } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

export default function BMIRegistration() {

  const navigate = useNavigate();

  const [students, setStudents] = useState<any[]>([]);
  const [dateValue, setDateValue] = useState<Dayjs | null>(dayjs('2022-04-17'));

  useEffect(() => {
    const res = axios.get("http://localhost:8080/catering/students", {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      setStudents(response.data);
      // Swal.fire({
      //   icon: "success",
      //   title: "The student has been registered successfully",
      //   showConfirmButton: false,
      //   timer: 1500
      // });
    });
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // let userStr = localStorage.getItem('CATERING_LOGIN_USER') || '{}';
    // let userObj = JSON.parse(userStr);
    // localStorage.getItem("CATERING_LOGIN_USER");
    const json = JSON.stringify({
      studentId: data.get('studentId'),
      height: data.get('height'),
      weight: data.get('weight'),
      date: data.get('date')
    });
    console.log(json);
    const res = axios.post("http://localhost:8080/catering/students/measure", json, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      Swal.fire({
        icon: "success",
        title: "The student measure has been saved successfully",
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/schoolAdmin/bmi/register');
    });
  };

  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
      <>
          <Box sx={{ display: 'flex', marginTop: '60px' }} component="form" onSubmit={handleSubmit}>
            <SchoolAdminSideNav title='BMI Details'/>
              <Box component="div" sx={{ flexGrow: 1, p: 3 }}>
                <Box textAlign={'center'}>
                    <Typography lineHeight={3} component="h1" variant="h4">
                        Register BMI Details
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
                            value={age || ''}
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
                          <TextField
                              size='small'
                              required
                              fullWidth
                              id="height"
                              label="Student Height"
                              name="height"
                          />
                      </Grid>
                      <Grid item xs={6} sm={6} />
                      <Grid item xs={6} sm={6}>
                          <TextField
                              size='small'
                              name="weight"
                              required
                              fullWidth
                              id="weight"
                              label="Student Weight"
                              autoFocus
                          />
                      </Grid>
                      <Grid item xs={6} sm={6} />
                      <Grid item xs={6} sm={6}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer components={['DatePicker']}>
                            <DatePicker 
                              label="Basic date picker"
                              name="date"
                              format="YYYY-MM-DD"
                            />
                          </DemoContainer>
                        </LocalizationProvider>
                      </Grid>
                      <Grid item xs={6} sm={6} />
                  </Grid>

                </Box>
                <Box textAlign={'left'}>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >Submit</Button>
                </Box>
            </Box>

          </Box>
      </>
  )
}