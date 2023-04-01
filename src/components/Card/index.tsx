import { Paper, Typography } from "@mui/material"
import { Container } from './styled'
interface CardProps{
  title: string
  image: string
}

export const Card = ({title, image}:CardProps)=>{
  return(
    <Container elevation={3}>
      <img src={image} alt={title}/>
      <Typography
        component="strong"
        variant="h5"
        fontWeight="bold"
      >
        {title}
      </Typography>
    </Container>
  )
}
