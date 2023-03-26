import { Button, TextField } from "@mui/material";
import { GroupInput } from "./styled";
export const SignUp = () => {
  return (
    <form>
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
      <span>Already have an account? Login</span>
    </form>
  );
};
