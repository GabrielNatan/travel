import { Button, TextField } from "@mui/material"
import { Form } from "./styled"
export const VerifyCode = ()=>{
    return(
      <Form>
        <h1>Verify Code</h1>
        <strong>Um texto de exemplo</strong>
        <TextField fullWidth label="Password" variant="outlined" />
        <Button fullWidth variant="outlined">Outlined</Button>
      </Form>
    )
}
