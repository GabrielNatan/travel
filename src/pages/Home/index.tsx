import { Box, Grid, Paper, Typography } from "@mui/material"
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
          <Main>
            <Section>
              <MaxContent maxWidth="xl" sx={{display:"flex", flexDirection:"column", gap:3}} >
                <Typography component='h1' variant="h4" >
                  Popular Place
                </Typography>

                <Grid container  spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={4}>
                    <Card
                      title="Horseshoe Bay"
                      image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <Card
                      title="Horseshoe Bay"
                      image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <Card
                      title="Horseshoe Bay"
                      image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <Card
                      title="Horseshoe Bay"
                      image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <Card
                      title="Horseshoe Bay"
                      image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <Card
                      title="Horseshoe Bay"
                      image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
                    />
                  </Grid>
                </Grid>
              </MaxContent>
            </Section>
          </Main>
        </Container>
    )
}
