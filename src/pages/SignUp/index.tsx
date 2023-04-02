import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { Form, GroupInput } from "./styled";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import Customers from "../../api/Customers";
import { useSnackBar } from "../../context/SnackBarContext";

const schema = yup.object({
  name: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string()
  .email("required")
  .required(),
  password: yup.string().min(6).required(),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match')
}).required();

interface Inputs{
  name:string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

export const SignUp = () => {
  const { handleOpen } = useSnackBar()
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });

  const onSubmit: SubmitHandler<Inputs> = async data => {
    const { name, lastName, email, password } = data;
    let res = await Customers.createUser(name,lastName,email,password);
    if(handleOpen !== undefined){
      handleOpen(res)
    }
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign Up</h1>
      <strong>Um texto de exemplo</strong>
      <GroupInput>
        <TextField
          fullWidth
          type="text"
          label="Name"
          variant="outlined"
          {...register("name")}
          error={!!errors?.name?.message }
          helperText={errors?.name?.message}
        />
        <TextField
          fullWidth
          type="text"
          label="Last Name"
          variant="outlined"
          {...register("lastName")}
          error={!!errors?.lastName?.message }
          helperText={errors?.lastName?.message}
        />
      </GroupInput>
      <TextField
        fullWidth
        type="text"
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
        error={!!errors?.password?.message }
        helperText={errors?.password?.message}
      />
      <TextField
        fullWidth
        type="password"
        label="Confirm Password"
        variant="outlined"
        {...register("confirmPassword")}
        error={!!errors?.confirmPassword?.message }
        helperText={errors?.confirmPassword?.message}
      />
      <Button fullWidth variant="contained" type="submit">
        Create Accont
      </Button>
      <Button fullWidth variant="outlined">
        Outlined
      </Button>
      <Link to="/login">Already have an account? Login</Link>
    </Form>
  );
};
