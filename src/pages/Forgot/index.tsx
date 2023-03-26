import { Button, TextField } from "@mui/material"
export const Forgot = ()=>{
    return(
      <form>
        <h1>Forgot Password</h1>
        <strong>Um texto de exemplo</strong>
        <TextField fullWidth label="Email" variant="outlined" />
        <TextField fullWidth label="Confirm Password" variant="outlined" />
        <Button fullWidth variant="contained">Contained</Button>
        <span>Already have an account? Login</span>
      </form>
    )
}
