import { style } from "@vanilla-extract/css";

export const left = style({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
export const right = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const h1 = style({
  fontWeight: "bold",
  fontSize: "64px",
  margin: "48px 0",
});
export const h2 = style({
  fontWeight: "bold",
  fontSize: "31px",
  marginBottom: "32px",
});
export const h3 = style({
  fontWeight: "bold",
  fontSize: "17px",
  marginBottom: "20px",
  marginTop: "40px",
});

export const signup = style({
  width: "300px",
  height: "40px",
  borderRadius: "20px",
  padding: "0 16px",
  fontSize: "15px",
  backgroundColor: "rgb(29, 155, 240)",
  color: "white",
  border: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ":hover": {
    backgroundColor: "rgb(26, 140, 216)",
  },
});

export const login = style({
  width: "300px",
  height: "40px",
  borderRadius: "20px",
  padding: "0 16px",
  fontSize: "15px",
  color: "rgb(29, 155, 240)",
  border: "1px solid rgb(207, 217, 222)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ":hover": {
    backgroundColor: " rgba(29, 155, 240, 0.1)",
  },
});
