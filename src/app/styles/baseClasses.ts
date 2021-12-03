import style9 from "style9";

export const { ...base } = style9.create({
  root: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    flexBasis: "auto",
    alignItems: "stretch",
    flexShrink: 0,
    minWidth: 0,
    minHeight: 0,
  },
});
