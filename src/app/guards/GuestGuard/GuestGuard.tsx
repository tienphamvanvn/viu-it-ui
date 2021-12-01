import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

// types
import { VIUState } from "@/app/types/viu.type";

const GuestGuard: React.FC = ({ children }) => {
  const { isLogged } = useSelector(userSelector);

  if (isLogged) return <Redirect to="/home" />;

  return <>{children}</>;
};

const userSelector = (state: VIUState) => state.user;

export default GuestGuard;
