import { Box, Button, Card, CardContent, Table, Typography, styled } from '@mui/material';
import Grid from '@mui/material/Grid';
import SchoolAdminSideNav from '../../components/SchoolAdminSideNav';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import axios from 'axios';


function GuardianDetail() {

  const [guardian, setGuardian] = useState<any[]>([]);
  const [rows, setRows] = useState<any[]>([]);

  useEffect(() => {
    const res = axios.get("http://localhost:8080/catering/guardians", {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      setGuardian(response.data);
      console.log(response.data);
    });

  }, []);


  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));



  // const rows = [
  //   {"name": "sachintha", "email":"sssnisha@mgic.com", "mobile":"mobile","status":"status", "action":"action"}
  // ];
  return (
    <>
      <Box sx={{ display: 'flex', marginTop: '60px' }}>
        <SchoolAdminSideNav title='Guardian Details' />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Guardian Name</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>Mobile</StyledTableCell>
                <StyledTableCell>Status</StyledTableCell>
                <StyledTableCell>Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {guardian.map((row, index) => (
                <StyledTableRow key={index}>

                  <StyledTableCell>{row.firstName}</StyledTableCell>
                  <StyledTableCell>{row.email}</StyledTableCell>
                  <StyledTableCell>{row.mobile}</StyledTableCell>
                  {/* <StyledTableCell>{row.status}</StyledTableCell> */}
                  <StyledTableCell>PENDING</StyledTableCell>
                  <StyledTableCell>
                    <Button color='error'>Delete</Button>
                    <Button>Edit</Button>
                    <Button>Approve</Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  )
}

export default GuardianDetail