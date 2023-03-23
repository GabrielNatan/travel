import { Button, Grid, TextField } from "@mui/material"
import {
    Container,
    ContainerImage,
    Left,
    Right
} from "./styled"
import Image from "../../assets/images/island.jpg"
export const Login = ()=>{
    return(
      <Container>
        <Grid
          container
          height="100%"
        >
          <Left>
            <ContainerImage>
            </ContainerImage>
          </Left>
          <Right>
            <form>
              <h1>Login</h1>
              <strong>Um texto de exemplo</strong>
              <TextField fullWidth label="Email" variant="outlined" />
              <TextField fullWidth label="Password" variant="outlined" />
              <Button fullWidth variant="contained">Contained</Button>
              <Button fullWidth variant="outlined">Outlined</Button>
            </form>
          </Right>
        </Grid>
      </Container>
    )
}
