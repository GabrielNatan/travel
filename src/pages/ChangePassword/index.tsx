import { Button, Grid, TextField } from "@mui/material"
import {
    Container,
    ContainerImage,
    Left,
    GroupInput,
    Right
} from "./styled"
export const ChangePassword = ()=>{
    return(
      <Container>
        <Grid
          container
          height="100%"
        >
          <Left>
            <form>
              <h1>Change Password</h1>
              <strong>Um texto de exemplo</strong>
              <TextField fullWidth label="Password" variant="outlined" />
              <TextField fullWidth label="Confirm Password" variant="outlined" />
              <Button fullWidth variant="outlined">Outlined</Button>
              <span>Already have an account? Login</span>
            </form>
          </Left>
          <Right>
            <ContainerImage/>
          </Right>
        </Grid>
      </Container>
    )
}
