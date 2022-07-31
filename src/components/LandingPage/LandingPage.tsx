import { Button, Group, Text } from "@mantine/core";
import Link from "next/link";
import useStyles from "./styles";

const LandingPage: React.FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.bgImage}>
      <Text className={classes.heading} component="h1">
        Pub Club
      </Text>

      <Group className={classes.flexRow}>
        <Button className={classes.login}>
          <Link href="/login">login</Link>
        </Button>

        <Button className={classes.register}>
          <Link href="/register">Register</Link>
        </Button>
      </Group>
    </div>
  );
};

export default LandingPage;
