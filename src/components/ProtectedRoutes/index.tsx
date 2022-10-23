import React from "react";
import { Navigate, Outlet } from "react-router-dom";
// import { useUserContext } from "../../Providers";
import { useContext } from "react";
import { AuthContext } from "../../Providers";

export const ProtectedRoutes = () => {
  const { tokenUser } = useContext(AuthContext);

  return tokenUser ? <Outlet /> : <Navigate to={"/"} replace />;
};
