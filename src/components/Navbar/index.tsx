import { AppBar, Button, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import {
  Container,
  Topbar
} from "./styled"
export const Navbar = ()=>{
  return (
    <Container  >
      <AppBar  sx={{background: 'transparent'}}>
         <Topbar>
           <div style={{color:"#000"}}>Logo</div>

          <nav>
            <Link to="/login"><Button variant="outlined">Login</Button></Link>
            <Link to="/sign-up"><Button variant="contained">Sign up</Button></Link>
          </nav>
        </Topbar>
      </AppBar>

    </Container>
  )
}
