import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useContext } from "react";
import { AuthContext } from "../../Providers";

import { Main, DivLogin, Div } from "../../components/Main";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { PinkButton } from "../../components/Button";
import { HeadlineBold, Title2 } from "../../components/Fonts";

import { Link } from "react-router-dom";


import logo from "../../assets/Logo.svg" ;



export interface IUserLogin {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup
    .string()
    .email("Deve ser um email valido")
    .required("Email é obrigatório"),
  password: yup.string().required("Senha é obrigatório"),
});

const Login = () => {
  const { postLogin } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm <IUserLogin>({
    resolver: yupResolver(schema),
  });

  return (
    <Main>
      <img src={logo} alt="" />
      <Div>
        <Title2>Login</Title2>
        <Form onSubmit={handleSubmit(postLogin)}>
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            id="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>

          <label htmlFor="password">Senha</label>
          <Input
            type="password"
            id="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
          <PinkButton type="submit">Entrar</PinkButton>
        </Form>

        <DivLogin>
          <HeadlineBold>Ainda não possui uma conta?</HeadlineBold>
          <Link to={"/register"}>Cadastre-se</Link>
        </DivLogin>
      </Div>
    </Main>
  );
};

export default Login;
