import { Button, Grid, TextField } from "@mui/material"
import {
    Container,
    ContainerImage,
    Left,
    Right
} from "./styled"
export const Forgot = ()=>{
    return(
      <Container>
        <Grid
          container
          height="100%"
        >
          <Left>
            <ContainerImage/>
          </Left>
          <Right>
            <form>
              <h1>Forgot Password?</h1>
              <strong>Um texto de exemplo</strong>
              <TextField fullWidth label="Email" variant="outlined" />
              <TextField fullWidth label="Confirm Password" variant="outlined" />
              <Button fullWidth variant="contained">Contained</Button>
              <span>Already have an account? Login</span>
            </form>
          </Right>
        </Grid>
      </Container>
    )
}
