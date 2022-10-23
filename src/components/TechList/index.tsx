import { useUserContext } from "../../Providers";
import { TechProject } from "../TechProject";
import { TechUl } from "./style";

export const TechList = () => {
  const { profileData } = useUserContext();

  const { techs } = profileData;

  return (
    <TechUl>
      {techs?.map((element) => {
        return <TechProject object={element} key={element.id} />;
      })}
    </TechUl>
  );
};
