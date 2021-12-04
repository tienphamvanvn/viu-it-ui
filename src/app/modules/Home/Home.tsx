import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import style9 from "style9";
import Topbar from "./Topbar";

// layouts
import CommonLayout from "@/app/layouts/CommonLayout";

// actions
import { signOut } from "@/app/actions/user.action";

// styles
import { base } from "@/app/styles/baseClasses";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSignOut = () => {
    dispatch(signOut(history));
  };
  return (
    <div className={style9(base.root)}>
      <Topbar />
      <CommonLayout
        content={
          <div className={style9(base.root)}>
            Home Page
            <button onClick={handleSignOut}>Sign Out</button>
          </div>
        }
        sidebar={<div />}
      />
    </div>
  );
};

export default Home;
