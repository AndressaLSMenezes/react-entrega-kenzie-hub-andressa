import { findAllByTestId } from "@testing-library/react";
import { useEffect, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import api from "../../services";

export const Profile = createContext();

export const PersonalProfile = ({ children }) => {
  const [profileData, setProfileData] = useState({});
  const [visibleModalCreater, setVisibleModalCreater] = useState(false);
  const [visibleModalEdit, setVisibleModalEdit] = useState(false);
  const [project, setProject] = useState({});

  const tokenUser = JSON.parse(localStorage.getItem("@TokenHub"));

  const navigate = useNavigate();

  const notifyRegister = (sucess) => {
    sucess
      ? toast.success(" Cadastrado com Sucesso! ")
      : toast.error(" Email já cadastrado! ");
  };

  const goToLogin = (event) => {
    event.preventDefault();

    navigate("/");
  };

  const postRegister = (data) => {
    console.log(data);
    api
      .post(`/users`, data)
      .then((res) => {
        if (res.statusText === "Created") {
          navigate("/");
          notifyRegister(true);
        }
      })
      .catch((err) => {
        notifyRegister(false);
        console.log(err);
      });
  };

  ///LOGIN

  const goToRegister = (event) => {
    event.preventDefault();

    navigate("/register");
  };

  const postLogin = (data) => {
    api
      .post(`/sessions`, data)
      .then((res) => {
        if (res.statusText === "OK") {
          navigate("/dashboard");
          getProfile(res.data.token);
          localStorage.setItem("@TokenHub", JSON.stringify(res.data.token));
          localStorage.setItem("@IdHub", JSON.stringify(res.data.user.id));
        }
      })
      .catch((err) => console.log(err));
  };

  //DashBoard

  const goOut = () => {
    localStorage.clear();
    navigate("/");
  };

  const getProfile = (token) => {
    api
      .get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => setProfileData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProfile(tokenUser);
    // eslint-disable-next-line
  }, []);

  //MODAL

  // Creater M odal

  const createProject = (data) => {
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${tokenUser}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          setVisibleModalCreater(false);
          getProfile(tokenUser);
        }
      })
      .catch((err) => console.log(err));
  };

  // Edit and delete

  const deleteProject = () => {
    api
      .delete(`/users/techs/${project.id}`, {
        headers: {
          Authorization: `Bearer ${tokenUser}`,
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        setVisibleModalEdit(false);
        getProfile(tokenUser);
      })
      .catch((err) => console.log(err));
  };

  const editProject = (data) => {
    console.log(data);
    api
      .put(`/users/techs/${project.id}`, data, {
        headers: {
          Authorization: `Bearer ${tokenUser}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.status === 201) {
          setVisibleModalEdit(false);
          getProfile(tokenUser);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Profile.Provider
      value={{
        goToLogin,
        postRegister,
        goToRegister,
        postLogin,
        getProfile,
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
    </Profile.Provider>
  );
};
