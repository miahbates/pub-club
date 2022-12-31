import { useUser } from "@auth0/nextjs-auth0";
import { Box, Button, Group, TextInput } from "@mantine/core";
import { useRouter } from "next/router";
import { useForm } from "@mantine/form";
import useStyles from "./styles";

type TVenue = {
  id: number;
  name: string;
};

type THomeProps = {
  venues: Array<TVenue>;
};

const Home: React.FC<THomeProps> = ({ venues }) => {
  const { classes } = useStyles();
  const user = useUser();

  console.log("🚀 ~ file: Home.tsx:18 ~ user", user);

  const router = useRouter();
  // Call this function whenever you want to refresh props!
  const refreshData = () => {
    router.replace(router.asPath);
  };

  const handleAddVenue = async (
    values: { name: string },
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const res = await fetch("/api/venues", {
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
        "x-xhr": "true",
      },
      method: "POST",
    });
    const result = await res.json();

    if (res.status < 300) {
      refreshData();
    }

    console.log("result", result);
  };

  const form = useForm({
    initialValues: {
      name: "",
    },

    // validate: {
    //   pubName: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    // },
  });

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

      <Box sx={{ maxWidth: 300 }} mx="auto">
        <form
          onSubmit={form.onSubmit(handleAddVenue)}
          method="POST"
          action="/api/venues"
        >
          <TextInput
            withAsterisk
            label="Venue"
            name="name"
            placeholder="The Red Lion"
            {...form.getInputProps("name")}
          />
          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Box>

      <div>List all pubs</div>
      <ul>
        {venues.map((venue) => (
          <li key={venue.id}>{venue.name}</li>
        ))}
      </ul>

      <Button
        component="a"
        // href="/api/auth/logout"
        variant="gradient"
        gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
        className={classes.register}
      >
        Add Pub
      </Button>
      <Button
        component="a"
        // href="/api/auth/logout"
        variant="gradient"
        gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
        className={classes.register}
      >
        Delete Pub
      </Button>
      <div className={classes.wrapper}>{`Welcome ${user?.user?.name}`}</div>
    </div>
  );
};

export default Home;
