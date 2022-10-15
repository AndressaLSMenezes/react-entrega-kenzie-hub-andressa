import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Profile } from "../../Providers/Profile";

import { TechRegister } from "../../components/ModalTechRegister";
import { EditDelete } from "../../components/ModalEditDelete";
import DashboardHeader from "../../components/DashboardHeader";
import { HeadlineBold, Title1, Title2 } from "../../components/Fonts";
import MainDash from "../../components/MainDashboard";
import PersonalProfileBar from "../../components/SectionUser";
import { Technology } from "../../components/Technology";
import { TechList } from "../../components/TechList";
import { TechProject } from "../../components/TechProject";

import logo from "../../assets/Logo.svg";

const Dashboard = () => {
  const {
    profileData,
    goOut,
    visibleModalCreater,
    setVisibleModalCreater,
    visibleModalEdit,

    project,
  } = useContext(Profile);

  const { id, bio, contact, course_module, email, name, techs } = profileData;

  return (
    <>
      {visibleModalEdit && <EditDelete object={project} />}
      {visibleModalCreater && <TechRegister />}

      <DashboardHeader>
        <div>
          <img src={logo} alt="Logo Kenzie Hub" />
          <button onClick={() => goOut()}>Sair</button>
        </div>
      </DashboardHeader>
      <MainDash>
        <PersonalProfileBar>
          <div>
            <Title1>{name}</Title1>
            <HeadlineBold>{course_module}</HeadlineBold>
          </div>
        </PersonalProfileBar>
        <Technology>
          <Title2>Tecnologias</Title2>
          <button onClick={() => setVisibleModalCreater(true)}>+</button>
        </Technology>
        <TechList>
          {techs
            ?.sort((a, b) => a.created_at > b.created_at)
            .map((element) => {
              return <TechProject object={element} key={element.id} />;
            })}
        </TechList>
      </MainDash>
    </>
  );
};

export default Dashboard;
