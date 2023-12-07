import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function UserTab() {
  const [users, setUsers] = useState([]);
  //    const [loading, setLoading] = useState(false)
  useEffect(() => {
    // setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .finally(() => {
        // setLoading(false)
      });
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="center">NAME</StyledTableCell>
            <StyledTableCell align="center">USERNAME</StyledTableCell>
            <StyledTableCell align="center">WEBSITE</StyledTableCell>
            <StyledTableCell align="center">EMAIL</StyledTableCell>
            <StyledTableCell align="center">COMPANY NAME</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((userData) => (
            <StyledTableRow key={userData.id}>
              <StyledTableCell component="th" scope="row">
                {userData.id}
              </StyledTableCell>
              <StyledTableCell align="center">{userData.name}</StyledTableCell>
              <StyledTableCell align="center">
                {userData.username}
              </StyledTableCell>
              <StyledTableCell align="center">
                {userData.website}
              </StyledTableCell>
              <StyledTableCell align="center">{userData.email}</StyledTableCell>
              <StyledTableCell align="center">
                {userData.company.name}
              </StyledTableCell>
              <StyledTableCell align="center">
                <Button variant="outlined" startIcon={<AddIcon />}>
                  Add
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
