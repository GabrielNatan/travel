import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-size: 60px;
    line-height: 60px;
    font-family: "Courier New", Courier, monospace;
  }
  a {
    text-align: right;
    color: #0099ff;
    text-decoration: none;
    cursor: pointer;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    &:last-child {
      text-align: center;
    }
  }
`;

export const GroupInput = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;
