import { Grid } from "@mui/material"
import { Outlet } from "react-router-dom"
import {
  Container,
  ContainerImage,
  Left,
  Right
} from "./styled"

export const AuthTemplate = ()=>{
  const order = 'left'
  return(
    <Container>
    <Grid
      container
      height="100%"
    >
      <Left order={order}>
        <ContainerImage/>
      </Left>
      <Right order={order}>
        <Outlet/>
      </Right>
    </Grid>
  </Container>
  )
}
