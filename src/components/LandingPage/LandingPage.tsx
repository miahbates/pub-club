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
            component="a"
            href="/api/auth/login?returnTo=/home"
            variant="gradient"
            gradient={{ from: "teal", to: "blue", deg: 60 }}
            className={classes.login}
          >
            Login / Register
          </Button>
        </Group>
      </Group>
    </div>
  );
};

export default LandingPage;
