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
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from '@mui/icons-material/Create';

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

export default function PostTab() {
  const [posts, setPosts] = useState([]);
  //    const [loading, setLoading] = useState(false)
  useEffect(() => {
    // setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json))
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
            <StyledTableCell align="center">USERNAME</StyledTableCell>
            <StyledTableCell align="center">POST ID</StyledTableCell>
            <StyledTableCell align="center">BODY</StyledTableCell>
            <StyledTableCell align="center">TITLE</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((postData) => (
            <StyledTableRow key={postData.userId}>
              <StyledTableCell component="th" scope="row">
                {postData.userId}
              </StyledTableCell>

              <StyledTableCell align="center">
                {postData.userId}
              </StyledTableCell>
              <StyledTableCell align="center">{postData.id}</StyledTableCell>
              <StyledTableCell align="center">{postData.title}</StyledTableCell>
              <StyledTableCell align="center">{postData.body}</StyledTableCell>
              <StyledTableCell align="center">
                <Button variant="outlined" startIcon={<CreateIcon/>}>Edit</Button>
              </StyledTableCell>
              <StyledTableCell align="center">
                <Button variant="outlined" startIcon={<DeleteIcon />}>
                  Delete
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
