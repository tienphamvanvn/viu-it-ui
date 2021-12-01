import React from "react";
// import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

// types
import { VIUState } from "@/app/types/viu.type";

const AuthGuard: React.FC = ({ children }) => {
  const { isLogged } = useSelector(userSelector);

  if (isLogged) return <>{children}</>;

  return null;
};

const userSelector = (state: VIUState) => state.user;

export default AuthGuard;
