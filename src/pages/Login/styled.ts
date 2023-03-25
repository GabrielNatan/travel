import styled from 'styled-components'
import { Grid } from '@mui/material'
import Image from '../../assets/images/a.jpg'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

export const Left = styled(Grid)`
  flex: 1;
  display: none;
  padding: 30px;
  @media screen and (min-width:1199px){
    display:flex;
    align-items: center;
    justify-content: center;
  }
`

export const Right = styled(Grid)`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  max-width: 800px;
  form {
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    h1{
      font-size: 60px;
      line-height: 30px;
      font-family: 'Courier New', Courier, monospace;
    }
    a{
      text-align: right;
      color: #0099FF;
      text-decoration: none;
      cursor: pointer;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      &:last-child{
        text-align: center;
      }
    }
  }
`
export const ContainerImage = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  max-height: 10000px;
  border-radius: 30px;
  background-image: url(${Image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
`
