import { Button, TextField } from "@mui/material";
import { Form, GroupInput } from "./styled";
export const AddPayment = () => {
  return (
    <Form>
      <h1>Add Payment Card</h1>
      <strong>Um texto de exemplo</strong>
      <TextField fullWidth label="Card Number" variant="outlined" />
      <TextField fullWidth label="Name on Card" variant="outlined" />
      <TextField fullWidth label="Contry" variant="outlined" />
      <GroupInput>
        <TextField fullWidth label="Exp. Date" variant="outlined" />
        <TextField fullWidth label="CVC" variant="outlined" />
      </GroupInput>
      <Button fullWidth variant="contained">
        Contained
      </Button>
      <span>Already have an account? Login</span>
    </Form>
  );
};
