import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  bgImage: {
    backgroundImage: `url("https://images.pexels.com/photos/2457317/pexels-photo-2457317.png?cs=srgb&dl=pexels-anni-roenkae-2457317.jpg&fm=jpg")`,
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  heading: {
    fontSize: "52px",
    textAlign: "center",
    color: "black",
    fontFamily: "Oswald",
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
    padding: "4rem 2rem",
    borderRadius: "10px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  },
}));

export default useStyles;
