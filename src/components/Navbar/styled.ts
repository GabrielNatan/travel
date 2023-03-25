import { AppBar, Toolbar } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Topbar = styled(Toolbar)`
  background:#FFF;
  display: flex;
  justify-content: space-between;

  nav{
    display: flex;
    align-items: center;
    gap: 10px;
  }
`
