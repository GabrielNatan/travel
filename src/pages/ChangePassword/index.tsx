import { Button, TextField } from "@mui/material"

export const ChangePassword = ()=>{
    return(
      <form>
        <h1>Change Password</h1>
        <strong>Um texto de exemplo</strong>
        <TextField fullWidth label="Password" variant="outlined" />
        <TextField fullWidth label="Confirm Password" variant="outlined" />
        <Button fullWidth variant="outlined">Outlined</Button>
        <span>Already have an account? Login</span>
      </form>
    )
}
