import { Button, Grid, TextField } from "@mui/material"
import {
    Container,
    ContainerImage,
    Left,
    GroupInput,
    Right
} from "./styled"
export const SignUp = ()=>{
    return(
      <Container>
        <Grid
          container
          height="100%"
        >
          <Left>
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
              <Button fullWidth variant="contained">Contained</Button>
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
