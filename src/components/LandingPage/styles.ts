import { withTheme } from "@emotion/react";
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  login: {
    textDecoration: "none",
    width: "150px",
  },
  wrapper: {
    backgroundImage: "url('./login-background-image.avif')",
    backgroundSize: "cover",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  loginWrapper: {
    backgroundColor: "white,",
    padding: "3rem",
    zIndex: 999,
  },
}));

export default useStyles;
