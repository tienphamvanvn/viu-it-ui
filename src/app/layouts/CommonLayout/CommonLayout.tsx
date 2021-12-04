import React, { ReactNode } from "react";
import style9 from "style9";

// styles
import { base } from "@/app/styles/baseClasses";
import { classes } from "./styles";

const CommonLayout: React.FC<PropType> = ({ content, sidebar }) => {
  return (
    <div className={style9(base.root, classes.container)}>
      <div className={style9(base.root, classes.content)}>{content}</div>
      <div className={style9(base.root, classes.sidebar)}>{sidebar}</div>
    </div>
  );
};

type PropType = {
  content: ReactNode;
  sidebar: ReactNode;
};

export default CommonLayout;
