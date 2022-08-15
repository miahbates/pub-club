import { Button, Group } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/router";
import useStyles from "./styles";

const LandingPage: React.FC = () => {
  const { classes } = useStyles();
  const router = useRouter();

  return (
    <div className={classes.wrapper}>
      <Group className={classes.flexColumn}>
        <Image
          src="/pubclublogo.png"
          alt="pub club logo"
          width={250}
          height={250}
          className={classes.logo}
        ></Image>
        <Group mt="lg">
          <Button
            variant="gradient"
            gradient={{ from: "teal", to: "blue", deg: 60 }}
            className={classes.login}
            onClick={() => router.push("/login")}
          >
            Login
          </Button>
          <Button
            variant="gradient"
            gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
            onClick={() => router.push("/register")}
            className={classes.register}
          >
            Register
          </Button>
        </Group>
      </Group>
    </div>
  );
};

export default LandingPage;
