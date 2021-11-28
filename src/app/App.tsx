import React from "react";
import "./styles/app.css";
import style9 from "style9";

const classes = style9.create({
  red: {
    color: "red",
  },
});

const App = () => {
  return <div className={style9(classes.red)}>App</div>;
};

export default App;
