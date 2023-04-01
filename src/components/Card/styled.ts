import styled from "@emotion/styled";
import { Paper } from "@mui/material";

export const Container = styled(Paper)`
  width:100%;
  padding:10px;
  border-radius:10px;
  display: flex;
  flex-direction:column;
  gap:10px;

  & img{
    width: 100%;
    border-radius:10px;
  }
`
