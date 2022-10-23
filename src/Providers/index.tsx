import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ReactNode } from "react";

import { IUserRegister } from "../pages/Register";
import { IUserLogin } from "../pages/Login";
import { IUserEditTechs } from "../components/ModalEditDelete";
import { IUserTechRegister } from "../components/ModalTechRegister";

import { IUserContext, IProject, IProfile } from "../interfaces";

import api from "../services/api";

interface IUserProvidersProps {
  children: ReactNode;
}

export const AuthContext = createContext<IUserContext>({} as IUserContext);

export const AuthProvider = ({ children }: IUserProvidersProps) => {
  const [profileData, setProfileData] = useState<IProfile>({} as IProfile);
  const [visibleModalCreater, setVisibleModalCreater] =
    useState<boolean>(false);
  const [visibleModalEdit, setVisibleModalEdit] = useState<boolean>(false);
  const [project, setProject] = useState<IProject>({} as IProject);
  const [tokenUser, setTokenUser] = useState<string>("" as string);

  const navigate = useNavigate();

  async function postRegister(data: IUserRegister) {
    try {
      const response = await api.post(`/users`, data);
      navigate("/");
      toast.success(" Cadastrado com Sucesso! ");
      console.log(response.data);
    } catch (error) {
      toast.error(" Email já cadastrado! ");
      console.error(error);
    }
  }

  ///LOGIN

  async function postLogin(data: IUserLogin) {
    try {
      const response = await api.post(`/sessions`, data);
      toast.success(" Login feito com Sucesso! ");
      navigate("/dashboard");
      getProfile(response.data.token);
      setTokenUser(response.data.token);
      localStorage.setItem("@TokenHub", JSON.stringify(response.data.token));
    } catch (error) {
      console.error(error);
      toast.error(
        "Não foi possível fazer o login. Verifique se os dados estão corretos!"
      );
    }
  }

  //DashBoard

  const goOut = () => {
    localStorage.clear();
    navigate("/");
  };

  async function getProfile(token: string) {
    try {
      const response = await api.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      setProfileData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  //MODAL

  // Creater Modal

  async function createProject(data: IUserTechRegister) {
    try {
      await api.post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${tokenUser}`,
          "Content-Type": "application/json",
        },
      });
      setVisibleModalCreater(false);
      getProfile(tokenUser);
    } catch (error) {
      console.error(error);
    }
  }
  // Edit and delete

  async function deleteProject() {
    try {
      await api.delete(`/users/techs/${project.id}`, {
        headers: {
          Authorization: `Bearer ${tokenUser}`,
          "Content-Type": "application/json",
        },
      });
      setVisibleModalEdit(false);
      getProfile(tokenUser);
    } catch (error) {
      console.error(error);
    }
  }

  async function editProject(data: IUserEditTechs) {
    try {
      await api.put(`/users/techs/${project.id}`, data, {
        headers: {
          Authorization: `Bearer ${tokenUser}`,
          "Content-Type": "application/json",
        },
      });
      setVisibleModalEdit(false);
      getProfile(tokenUser);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        postRegister,
        postLogin,
        getProfile,
        tokenUser,
        goOut,
        profileData,
        visibleModalCreater,
        setVisibleModalCreater,
        createProject,
        editProject,
        deleteProject,
        visibleModalEdit,
        setVisibleModalEdit,
        project,
        setProject,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useUserContext() {
  const context = useContext(AuthContext);
  return context;
}
