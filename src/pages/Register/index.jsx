import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useContext } from "react";
import { AuthContext } from "../../Providers";

import { Link } from "react-router-dom";
import Form from "../../components/Form";
import Input from "../../components/Input";
import { Main, DivRegister, Div } from "../../components/Main";
import { PinkButton } from "../../components/Button";
import { Headline, Title2 } from "../../components/Fonts";
import { Select } from "../../components/Select";

import logo from "../../assets/Logo.svg";

const schema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup
    .string()
    .email("Deve ser um email valido")
    .required("Email é obrigatório"),
  password: yup
    .string()
    .required("Senha é obrigatório")
    .min(6, "No minimo 6 caracteres")
    .required("Senha é obrigatória"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Precisa ser igual a senha"),
  bio: yup.string().required("Bio é obrigatório"),
  contact: yup.string().required("Contato é obrigatório"),
  course_module: yup.string("oi").required("É obrigatório definir o modulo"),
});

const Register = () => {
  const { postRegister } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Main>
      <DivRegister>
        <img src={logo} alt="" />
        <Link to={"/"}>Voltar</Link>
      </DivRegister>

      <Div>
        <Title2>Crie sua conta</Title2>
        <Headline>Rapido e grátis, vamos nessa</Headline>
        <Form onSubmit={handleSubmit(postRegister)}>
          <label htmlFor="name">Nome</label>
          <Input
            type="text"
            id="name"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
          <p>{errors.name?.message}</p>

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

          <label htmlFor="passwordConfirmation">Confirmar Senha</label>
          <Input
            type="password"
            id="passwordConfirmation"
            placeholder="Digite novamente sua senha"
            {...register("passwordConfirmation")}
          />
          <p>{errors.passwordConfirmation?.message}</p>

          <label htmlFor="bio">Bio</label>
          <Input
            type="text"
            id="bio"
            placeholder="Fale sobre você"
            {...register("bio")}
          />

          <label htmlFor="contact">Opção de contato</label>
          <Input
            type="text"
            id="contact"
            placeholder="Digite aqui seu email"
            {...register("contact")}
          />
          <p>{errors.contact?.message}</p>

          <label htmlFor="course_module">Selecionar módulo</label>
          <Select id="course_module" {...register("course_module")}>
            <option value="">Escolha</option>

            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo (Introdução ao Frontend)
            </option>

            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo (Frontend Avançado)
            </option>

            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo (Introdução ao Backend)
            </option>

            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo (Backend Avançado)
            </option>
          </Select>
          <p>{errors.course_module?.message}</p>

          <PinkButton type="submit">Cadastrar</PinkButton>
        </Form>
      </Div>
    </Main>
  );
};

export default Register;
