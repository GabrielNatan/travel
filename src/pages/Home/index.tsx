import { CardTravel } from "../../components/CardTravel"
import { Navbar } from "../../components/Navbar"

import {
  Container,
  Header,
  ContainerText,
  ContainerCardTravel,
  Main,
} from "./styled"

export const Home = ()=>{
    return(
        <Container>
          <Header>
            <Navbar/>
            <ContainerText>
              <h1>Helping Others</h1>
              <h2>Live & Travel</h2>
              <strong>Special offcers to suit your plan</strong>
            </ContainerText>
            <ContainerCardTravel>
              <CardTravel/>
            </ContainerCardTravel>
          </Header>
        </Container>
    )
}
