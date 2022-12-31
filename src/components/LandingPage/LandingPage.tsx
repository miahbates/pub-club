import { Button, Group, Text } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/router";
import useStyles from "./styles";

const LandingPage: React.FC = () => {
  const { classes } = useStyles();

  return (
    <Group>
      <div
        styles={{
          div: { width: "100%", height: "100%", position: "relative" },
        }}
      >
        <Image
          layout="fill"
          objectFit="contain"
          // height="70%"
          // width="100%"
          src="/login-background-image.avif"
          alt="eldering man in pub drinking a beer"
        ></Image>
      </div>
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
  );
};

export default LandingPage;
