// import { findAllByTestId } from "@testing-library/react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import api from "../services";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [profileData, setProfileData] = useState({});
  const [visibleModalCreater, setVisibleModalCreater] = useState(false);
  const [visibleModalEdit, setVisibleModalEdit] = useState(false);
  const [project, setProject] = useState({});

  const tokenUser = JSON.parse(localStorage.getItem("@TokenHub"));

  const navigate = useNavigate();

  async function postRegister(data) {
    try {
      await api.post(`/users`, data);
      navigate("/");
      toast.success(" Cadastrado com Sucesso! ");
    } catch (error) {
      toast.error(" Email já cadastrado! ");
      console.error(error);
    }
  }

  ///LOGIN

  async function postLogin(data) {
    try {
      const response = await api.post(`/sessions`, data);
      toast.success(" Login feito com Sucesso! ");
      navigate("/dashboard");
      getProfile(response.data.token);
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

  async function getProfile(token) {
    try {
      const response = await api.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setProfileData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  //MODAL

  // Creater Modal

  async function createProject(data) {
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

  async function editProject(data) {
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
