import { Button, TextField } from "@mui/material"
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link } from "react-router-dom";
import { Form } from "./styled"
import Customers from "../../api/Customers";
import { useSnackBar } from "../../context/SnackBarContext";

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
  const { handleOpen } = useSnackBar()
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });
  const onSubmit: SubmitHandler<Inputs> = async data => {
    const { email, password } = data;
    let res = await Customers.login(email,password);

    if(handleOpen !== undefined){
      handleOpen(res.message)
    }
  };

  return(
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>
      <p>Um texto de exemplo</p>
      <TextField
        fullWidth
        type="email"
        label="Email"
        variant="outlined"
        {...register("email")}
        error={!!errors?.email?.message }
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
    </Form>
  )
}
