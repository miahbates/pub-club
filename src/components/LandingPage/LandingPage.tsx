import { Button, Group, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import { useRouter } from "next/router";
import useStyles from "./styles";

const LandingPage: React.FC = () => {
  const { classes } = useStyles();
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      <Group className={classes.flexColumn} mt="xl">
        <Image
          src="/pubclublogo.png"
          alt="pub club logo"
          width={250}
          height={250}
          className={classes.logo}
        ></Image>
        <Group className={classes.flexRow} mt="lg">
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
