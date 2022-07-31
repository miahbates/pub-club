import { Button, Group, Text } from "@mantine/core";
import { useRouter } from "next/router";
import useStyles from "./styles";

const LandingPage: React.FC = () => {
  const { classes } = useStyles();
  const router = useRouter();

  return (
    <div className={classes.bgImage}>
      <Text className={classes.heading} component="h1">
        Pub Club
      </Text>

      <Group className={classes.flexRow}>
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
    </div>
  );
};

export default LandingPage;
