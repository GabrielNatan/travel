import { Button, Grid, TextField } from "@mui/material"
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {
    Container,
    ContainerImage,
    Left,
    Right
} from "./styled"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
type Inputs = {
  email: string,
  password: string,
};

const schema = yup.object({
  email: yup.string()
  .email("required")
  .required(),
  password: yup.string().min(6).required(),
}).required();

export const Login = ()=>{
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  console.log(errors)
  return(
    <Container>
      <Grid
        container
        height="100%"
      >
        <Left>
          <ContainerImage/>
        </Left>
        <Right>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Login</h1>
            <p>Um texto de exemplo</p>
            <TextField
              fullWidth
              type="email"
              label="Email"
              variant="outlined"
              {...register("email")}
              error={!!errors?.email?.message}
              helperText={errors?.email?.message}
            />
            <TextField
              fullWidth
              type="password"
              label="Password"
              variant="outlined"
              {...register("password")}
              error={!!errors?.password?.message}
              helperText={errors?.password?.message}
            />
            <Link to="/forgot-password">Forgot password</Link>
            <Button
              type="submit"
              variant="contained"
              fullWidth
            >
              Login
            </Button>
            <Link to="/sign-up">create accont</Link>

          </form>
        </Right>
      </Grid>
    </Container>
  )
}
