import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers";

import { TechProject } from "../TechProject";
import { PinkButton } from "../Button";

import { TechUl } from "./style";

export const TechList = () => {
  const { profileData, getProfile, tokenUser } = useContext(AuthContext);
  const { techs } = profileData;
  const [sortType, setSortType] = useState("recent");
  const [sortTechs, setSortTechs] = useState([]);

  useEffect(() => {
    if (sortType === "recent") {
      setSortTechs(techs?.sort((a, b) => a.created_at < b.created_at));
    } else if (sortType === "oldOne") {
      setSortTechs(techs?.sort((a, b) => a.created_at > b.created_at));
    } else if (sortType === "A-Z") {
      setSortTechs(
        techs?.sort((a, b) => a.title.toUpperCase() > b.title.toUpperCase())
      );
    } else if (sortType === "Z-A") {
      setSortTechs(
        techs?.sort((a, b) => a.title.toUpperCase() < b.title.toUpperCase())
      );
    }

    getProfile(tokenUser);
  }, [sortType, techs, tokenUser, getProfile]);

  return (
    <TechUl>
      <nav>
        <PinkButton onClick={() => setSortType("recent")} status={sortType}>
          Mais recentes
        </PinkButton>
        <PinkButton onClick={() => setSortType("oldOne")} status={sortType}>
          Mais antigos
        </PinkButton>
        <PinkButton onClick={() => setSortType("A-Z")} status={sortType}>
          A-Z
        </PinkButton>
        <PinkButton onClick={() => setSortType("Z-A")} status={sortType}>
          Z-A
        </PinkButton>
      </nav>

      {sortTechs?.map((element) => {
        return <TechProject object={element} key={element.id} />;
      })}
    </TechUl>
  );
};
