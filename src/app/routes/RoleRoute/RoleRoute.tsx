import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

// types
import { VIUState } from "@/app/types/viu.type";

const RoleRoute: React.FC<PropsType> = ({ children, requireRoles = [] }) => {
  const { profile } = useSelector(userSelector);
  const history = useHistory();

  useEffect(() => {
    if (profile) {
      const { role } = profile;

      if (!role || requireRoles.length === 0) return;

      const checkRole = requireRoles.includes(role);

      if (!checkRole) history.replace("/403");
    }
  }, [history, profile, requireRoles]);

  return <>{children}</>;
};

type PropsType = {
  requireRoles: string[] | [];
};

const userSelector = (state: VIUState) => state.user;

export default RoleRoute;
