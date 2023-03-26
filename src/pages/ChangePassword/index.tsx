import { Button, TextField } from "@mui/material"
import { Form } from "./styled"

export const ChangePassword = ()=>{
    return(
      <Form>
        <h1>Change Password</h1>
        <strong>Um texto de exemplo</strong>
        <TextField fullWidth label="Password" variant="outlined" />
        <TextField fullWidth label="Confirm Password" variant="outlined" />
        <Button fullWidth variant="outlined">Outlined</Button>
        <span>Already have an account? Login</span>
      </Form>
    )
}
