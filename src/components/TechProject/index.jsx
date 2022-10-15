import { Headline, Title3 } from "../Fonts";
import { TechLanguage } from "./style";
import { useContext, useEffect } from "react";
import { Profile } from "../../Providers/Profile";

export const TechProject = ({ object }) => {
  let { id, status, title } = object;
  const { setVisibleModalEdit, setProject, project } = useContext(Profile);

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
