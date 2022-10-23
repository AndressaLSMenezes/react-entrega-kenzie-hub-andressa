import { Headline, Title3 } from "../Fonts";
import { TechLanguage } from "./style";
import { useContext } from "react";
import { AuthContext } from "../../Providers";
import { IProps } from "../../interfaces";

export const TechProject = ({ object }: IProps) => {
  let { id, status, title } = object;
  const { setVisibleModalEdit, setProject } = useContext(AuthContext);

  return (
    <TechLanguage
      id={id}
      onClick={() => {
        setProject(object);
        setVisibleModalEdit(true);
      }}
    >
      <Title3>{title}</Title3>
      <Headline>{status}</Headline>
    </TechLanguage>
  );
};
