import { useContext, useEffect } from "react";
import { AuthContext } from "../../Providers";

import { TechRegister } from "../../components/ModalTechRegister";
import { EditDelete } from "../../components/ModalEditDelete";
import DashboardHeader from "../../components/DashboardHeader";
import { HeadlineBold, Title1, Title2 } from "../../components/Fonts";
import MainDash from "../../components/MainDashboard";
import PersonalProfileBar from "../../components/SectionUser";
import { Technology } from "../../components/Technology";
import { TechList } from "../../components/TechList";

import logo from "../../assets/Logo.svg";
import { BlackButton } from "../../components/Button";

const Dashboard = () => {
  const {
    getProfile,
    tokenUser,
    profileData,
    goOut,
    visibleModalCreater,
    setVisibleModalCreater,
    visibleModalEdit,

    project,
  } = useContext(AuthContext);

  useEffect(() => {
    getProfile(tokenUser);
    console.log(project);
    // eslint-disable-next-line
  }, []);

  const { course_module, name } = profileData;

  return (
    <>
      {visibleModalEdit && <EditDelete object={project} />}
      {visibleModalCreater && <TechRegister />}

      <DashboardHeader>
        <div>
          <img src={logo} alt="Logo Kenzie Hub" />
          <BlackButton onClick={() => goOut()}>Sair</BlackButton>
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
        <TechList></TechList>
      </MainDash>
    </>
  );
};

export default Dashboard;
