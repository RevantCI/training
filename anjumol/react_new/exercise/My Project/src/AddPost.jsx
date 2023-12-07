import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";

export default function AddPost() {
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
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="standard-basic" label="Title" variant="standard" />
        <TextField id="standard-basic" label="Body" variant="standard" />
        <TextField
          id="Users"
          select
          label="Select user"
          defaultValue="EUR"
          helperText="Please select your user"
          variant="standard"
        >
          {users.map((userData) => (
            <MenuItem key={userData.id} value={userData.username}>
              {userData.username}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Box>
        <Button variant="contained">Submit</Button>
      </Box>
    </>
  );
}
