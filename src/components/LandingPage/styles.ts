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
  },
  login: {
    textDecoration: "none",
    width: "100px",
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
    width: "40%",
    margin: "0 auto",
    textAlign: "center",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: "80%",
      justifyContent: "start",
      marginTop: "8%",
    },
  },
}));

export default useStyles;
