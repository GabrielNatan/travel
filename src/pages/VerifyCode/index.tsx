import { Button, TextField } from "@mui/material"
export const VerifyCode = ()=>{
    return(
      <form>
        <h1>Verify Code</h1>
        <strong>Um texto de exemplo</strong>
        <TextField fullWidth label="Password" variant="outlined" />
        <Button fullWidth variant="outlined">Outlined</Button>
      </form>
    )
}
