import { Button, Grid, TextField } from "@mui/material"
import {
    Container,
    ContainerImage,
    Left,
    GroupInput,
    Right
} from "./styled"
export const AddPayment = ()=>{
    return(
      <Container>
        <Grid
          container
          height="100%"
        >
          <Left>
            <form>
              <h1>Add Payment Card</h1>
              <strong>Um texto de exemplo</strong>
              <TextField fullWidth label="Card Number" variant="outlined" />
              <TextField fullWidth label="Name on Card" variant="outlined" />
              <TextField fullWidth label="Contry" variant="outlined" />
              <GroupInput>
                <TextField fullWidth label="Exp. Date" variant="outlined" />
                <TextField fullWidth label="CVC" variant="outlined" />
              </GroupInput>
              <Button fullWidth variant="contained">Contained</Button>
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
