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
    boxSizing: "border-box",
  },
  rootText: {
    display: "inline",
    boxSizing: "border-box",
    fontFamily: "San Francisco Pro",
    fontSize: 14,
    color: "rgba(0,0,0,1.00)",
    margin: 0,
    padding: 0,
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
  },
  rootTextEllipsis: {
    maxWidth: "100%",
    overflowX: "hidden",
    overflowY: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    minWidth: 0,
    overflowWrap: "break-word",
  },
});
