import { Grid, Typography } from "@mui/material"
import { CardTravel } from "../../components/CardTravel"
import { Navbar } from "../../components/Navbar"
import MaxContent from '@mui/material/Container';
import {
  Container,
  Header,
  ContainerText,
  ContainerCardTravel,
  Main,
  Section
} from "./styled"
import { Card } from "../../components/Card"
import { useEffect, useState } from "react";
import { app } from "../../api";

interface IData{
  title: string
  image: string
}

export const Home = ()=>{
  const [popular, setPopular] = useState<IData[]>([])
  useEffect(()=>{
    app.get('/popular')
    .then(el=>{
      const { data } = el
      setPopular(data)
    })
  },[])

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
          <Main>
            <Section>
              <MaxContent maxWidth="xl" sx={{display:"flex", flexDirection:"column", gap:3}} >
                <Typography component='h1' variant="h4" >
                  Popular Place
                </Typography>

                <Grid container  spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  {popular.map(el=>{
                    return(
                      <Grid item xs={4}>
                        <Card
                          title={el.title}
                          image={el.image}
                        />
                      </Grid>
                    )
                  })}
                </Grid>
              </MaxContent>
            </Section>
          </Main>
        </Container>
    )
}
