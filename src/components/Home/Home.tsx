import { useUser } from "@auth0/nextjs-auth0";
import { Button, Group } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/router";
import useStyles from "./styles";

const Home: React.FC = () => {
  const { classes } = useStyles();
  const user = useUser();

  console.log("user", user);

  return (
    <div>
      <Button
        component="a"
        href="/api/auth/logout"
        variant="gradient"
        gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
        className={classes.register}
      >
        Logout
      </Button>
      <div className={classes.wrapper}>{`Welcome ${user?.user?.name}`}</div>;
    </div>
  );
};

export default Home;
