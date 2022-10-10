import { useNavigate } from "react-router-dom";
import api from "../../services";


import DashboardHeader from "../../components/DashboardHeader";
import { HeadlineBold, Title1 } from "../../components/Fonts";
import MainDash from "../../components/MainDashboard";
import PersonalProfile from "../../components/SectionUser";

import logo from "../../assets/Logo.svg";

import { useEffect, useState } from "react";

const Dashboard = () => {
  const navigate = useNavigate();

  const [personalProfile, setPersonalProfile] = useState({});

  const goOut = () => {
    localStorage.clear();
    navigate("/");
  };

  const token = localStorage.getItem("@TokenHub");

  useEffect(() => {
    api.defaults.headers.authorization = `Bearer ${token}`;
    api
      .get(`/profile`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  // console.log(personalProfile);
  return (
    <>
      <DashboardHeader>
        <div>
          <img src={logo} alt="Logo Kenzie Hub" />
          <button onClick={(event) => goOut(event)}>Sair</button>
        </div>
      </DashboardHeader>
      <MainDash>
        <PersonalProfile>
          <div>
            <Title1>User Name</Title1>
            <HeadlineBold>aaaaaaaaaaaaa</HeadlineBold>
          </div>
        </PersonalProfile>
      </MainDash>
    </>
  );
};

export default Dashboard;
