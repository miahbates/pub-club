import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  bgImage: {
    backgroundImage: `url("https://images.unsplash.com/photo-1506803034607-ba76423b765a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80")`,
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    objectFit: "cover",
    // backgroundRepeat: "no-repeat",
    backgroundSize: "auto",
  },
  heading: {
    fontSize: "52px",
    textAlign: "center",
    color: "black",
  },
  login: {
    textDecoration: "none",
    width: "100px",
  },
  register: {
    textDecoration: "none",
    width: "100px",
  },
  flexRow: {
    display: "flex",
    justifyContent: "center",
  },
  innerWrapper: {
    background: "white",
    margin: "0 auto",
    padding: theme.spacing.xl,
    borderRadius: "5%",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  },
}));

export default useStyles;
