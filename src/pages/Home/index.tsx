import { Navbar } from "../../components/Navbar"

import {
  Container,
  Header,
  ContainerText,
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
          </Header>
        </Container>
    )
}
