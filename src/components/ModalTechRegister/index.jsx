import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { AuthContext } from "../../Providers";

import { Modal } from "./style";
import { Title3 } from "../Fonts";
import Input from "../Input";
import { Select } from "../Select";
import { PinkButton } from "../Button";

const schema = yup.object({
  title: yup.string().required("Nome é obrigatório"),
  status: yup.string().required("Status é obrigatório"),
});

export const TechRegister = () => {
  const { setVisibleModalCreater, createProject } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Modal>
      <section>
        <div>
          <Title3>Cadastrar Tecnologia</Title3>
          <button onClick={() => setVisibleModalCreater(false)}>X</button>
        </div>
        <form onSubmit={handleSubmit(createProject)}>
          <label htmlFor="title">Nome</label>
          <Input
            type="text"
            id="title"
            placeholder="Nome do Projeto"
            {...register("title")}
          />

          <p>{errors.email?.message}</p>

          <label htmlFor="status">Selecionar status</label>
          <Select id="status" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>

          <p>{errors.email?.message}</p>

          <PinkButton type="submit">Cadastrar Tecnologia</PinkButton>
        </form>
      </section>
    </Modal>
  );
};
