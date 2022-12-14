import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUserContext } from "../../Providers";
import { IProps, ITech } from "../../interfaces";

import { PinkButton, GreyButton } from "../Button";
import { Title3 } from "../Fonts";
import Input from "../Input";

import { ModalEdit } from "./style";
import { Select } from "../Select";

const schema = yup.object({
  title: yup.string().required("Nome é obrigatório"),
  status: yup.string().required("Status é obrigatório"),
});

export const EditDelete = ({ object }: IProps) => {
  const { setVisibleModalEdit, editProject, deleteProject } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITech>({
    resolver: yupResolver(schema),
  });

  return (
    <ModalEdit>
      <section>
        <div>
          <Title3>Tecnologia Detalhes</Title3>
          <button onClick={() => setVisibleModalEdit(false)}>X</button>
        </div>
        <form onSubmit={handleSubmit(editProject)}>
          <label htmlFor="title">Nome</label>
          <Input
            type="text"
            id="title"
            placeholder="Nome do Projeto"
            {...register("title")}
          />

          <p>{errors.title?.message}</p>

          <label htmlFor="status">Selecionar status</label>
          <Select id="status" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>
          <div>
            <PinkButton type="submit">Salvar alterações</PinkButton>
            <GreyButton type="button" onClick={() => deleteProject(object.id)}>
              Excluir
            </GreyButton>
          </div>

          <p>{errors.status?.message}</p>
        </form>
      </section>
    </ModalEdit>
  );
};
