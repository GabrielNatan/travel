import styled from "styled-components";
import Image from "../../assets/images/man.jpg"
export const Container = styled.div`
  width: 100%;
`
export const Header = styled.header`
  width: 100%;
  height: 80vh;
  background-image: url(${Image});
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  border-radius: 0 0 50px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000000A9;
  padding: 20px;
  border-radius: 10px;

  h1{
    font-size: 16px;
    color: #FFF;
  }
  h2{
    font-size: 30px;
    text-transform: uppercase;
    color: #FFF;
  }

  strong{
    font-size: 16px;
    color: #FFF;
  }
  @media screen and (min-width: 1199px){
    padding: 60px;
    h1{
      font-size: 30px;
      color: #FFF;
    }
    h2{
      font-size: 120px;
      text-transform: uppercase;
      color: #FFF;
    }

    strong{
      font-size: 30px;
      color: #FFF;
    }
  }

`

export const Main = styled.main`

`
