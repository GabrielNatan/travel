import { Button, TextField } from "@mui/material"
import { Link } from "react-router-dom"
import { Form } from "./styled"
export const Forgot = ()=>{
    return(
      <Form>
        <h1>Forgot Password</h1>
        <strong>Um texto de exemplo</strong>
        <TextField fullWidth label="Email" variant="outlined" />
        <Button fullWidth variant="contained">Contained</Button>
        <Link to="/login">Already have an account? Login</Link>
      </Form>
    )
}
