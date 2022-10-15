import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useContext } from "react";
import { Profile } from "../../Providers/Profile";

import { Main, DivLogin, Div } from "../../components/Main";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { GreyButton, PinkButton } from "../../components/Button";
import { HeadlineBold, Title2 } from "../../components/Fonts";
import Logo from "../../components/Logo";

const schema = yup.object({
  email: yup
    .string()
    .email("Deve ser um email valido")
    .required("Email é obrigatório"),
  password: yup.string().required("Senha é obrigatório"),
});

const Login = () => {
  const { goToRegister, postLogin } = useContext(Profile);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Main>
      <Logo>Kenzie Hub</Logo>
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
          <GreyButton onClick={(event) => goToRegister(event)}>
            Cadastre-se
          </GreyButton>
        </DivLogin>
      </Div>
    </Main>
  );
};

export default Login;
