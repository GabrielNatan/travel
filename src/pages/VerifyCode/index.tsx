import { Button, Grid, TextField } from "@mui/material"
import {
    Container,
    ContainerImage,
    Left,
    Right
} from "./styled"
export const VerifyCode = ()=>{
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
              <h1>Verify Code</h1>
              <strong>Um texto de exemplo</strong>
              <TextField fullWidth label="Password" variant="outlined" />
              <Button fullWidth variant="outlined">Outlined</Button>
            </form>
          </Right>
        </Grid>
      </Container>
    )
}
