import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { Form, GroupInput } from "./styled";
export const SignUp = () => {
  return (
    <Form>
      <h1>Sign Up</h1>
      <strong>Um texto de exemplo</strong>
      <GroupInput>
        <TextField fullWidth label="Name" variant="outlined" />
        <TextField fullWidth label="Last Name" variant="outlined" />
      </GroupInput>
      <TextField fullWidth label="Email" variant="outlined" />
      <TextField fullWidth label="Password" variant="outlined" />
      <TextField fullWidth label="Confirm Password" variant="outlined" />
      <Button fullWidth variant="contained">
        Contained
      </Button>
      <Button fullWidth variant="outlined">
        Outlined
      </Button>
      <Link to="/login">Already have an account? Login</Link>
    </Form>
  );
};
