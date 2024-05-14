import { Box, Button, Grid, Link, ListItem, SelectChangeEvent, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import SchoolAdminSideNav from '../../components/SchoolAdminSideNav';
import Swal from 'sweetalert2';

export default function GenerateConsultantSchedule() {
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let date = data.get('date');
        axios.get("http://localhost:8080/catering/schedules/consultant?date=" + date, {
            headers: {
            'Content-Type': 'application/json'
            }
        }).then((response) => {
            Swal.fire({
                icon: "success",
                title: "The schedule has been generated successfully",
                showConfirmButton: false,
                timer: 1500
              });
        });    
    };

    return (
        <>
            <Box sx={{ display: 'flex', marginTop: '60px' }} component="form" onSubmit={handleSubmit}>
                <SchoolAdminSideNav title='Genarate Consultant Schedule' />
                <Box component="div" sx={{ flexGrow: 1, p: 3 }}>
                    <Box textAlign={'center'}>
                        <Typography lineHeight={3} component="h1" variant="h4">
                            Generate Consultant Schedule
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
                        </Grid>

                    </Box>
                </Box>

            </Box>
        </>
    )

}
