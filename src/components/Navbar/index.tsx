import { AppBar, Button, Toolbar, Typography } from "@mui/material"
import {
  Container,
  Topbar
} from "./styled"
export const Navbar = ()=>{
  return (
    <Container  >
      <AppBar >
         <Topbar>
           <div style={{color:"#000"}}>Logo</div>

          <nav>
            <a><Button variant="outlined">Sign in</Button></a>
            <a><Button variant="contained">Sign up</Button></a>
          </nav>
        </Topbar>
      </AppBar>

    </Container>
  )
}
