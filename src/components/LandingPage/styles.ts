import { withTheme } from "@emotion/react";
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  logo: {
    borderRadius: "5px",
    padding: theme.spacing.lg,
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: "5px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    padding: theme.spacing.lg,
    background: "white",
  },
  login: {
    textDecoration: "none",
    width: "150px",
  },
  register: {
    textDecoration: "none",
    width: "100px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    height: "90%",
    width: "25%",
    margin: "0 auto",
    textAlign: "center",
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      width: "80%",
      justifyContent: "start",
      marginTop: "8%",
    },
  },
}));

export default useStyles;
