import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

// actions
import { signOut } from "@/app/actions/user.action";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSignOut = () => {
    dispatch(signOut(history));
  };
  return (
    <div>
      Home Page
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Home;
