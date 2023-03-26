import { Grid } from "@mui/material"
import { Outlet } from "react-router-dom"
import {
  Container,
  ContainerImage,
  Left,
  Right
} from "./styled"

export const AuthTemplate = ()=>{
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
        <Outlet/>
      </Right>
    </Grid>
  </Container>
  )
}
