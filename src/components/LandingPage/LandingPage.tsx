import { Button, Group } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/router";
import useStyles from "./styles";

const LandingPage: React.FC = () => {
  const { classes } = useStyles();

  return (
    <Group className={classes.wrapper}>
      <div className={classes.loginWrapper}>
        <Button
          component="a"
          href="/api/auth/login?returnTo=/home"
          variant="gradient"
          gradient={{ from: "teal", to: "blue", deg: 60 }}
          className={classes.login}
        >
          Login / Register
        </Button>
      </div>
    </Group>
  );
};

export default LandingPage;
