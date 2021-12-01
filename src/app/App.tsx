import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./styles/app.css";

// routes
import Routes from "./routes";

// actions
import { setUserData } from "./actions/user.action";
import { VIUState } from "./types/viu.type";

const App = () => {
  const { isLoading } = useSelector(appSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserData());
  }, [dispatch]);

  return (
    <Router>
      <>
        <Routes />
        {isLoading && <div>Loading.....</div>}
      </>
    </Router>
  );
};

const appSelector = (state: VIUState) => state.app;

export default App;
