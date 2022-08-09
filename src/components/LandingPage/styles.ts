import { Autocomplete, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  logo: {
    borderRadius: "5px",
    padding: theme.spacing.lg,
  },
  flexColumn: {
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // alignContent: "center",
    borderRadius: "5px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    // margin: theme.spacing.xl,
    // padding: theme.spacing.lg,
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      width: "50%",
      margin: "6rem auto",
      // padding: `2 * ${theme.spacing.lg}`,
    },
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
    // display: "flex",
    // justifyContent: "space-between",
  },
  wrapper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

export default useStyles;
