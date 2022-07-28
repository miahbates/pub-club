import Link from "next/link";
import useStyles from "./styles";

const LandingPage: React.FC = () => {
  const { classes } = useStyles();

  return (
    <div>
      <h1>Pub Club</h1>
      <Link href="/login">login</Link>
      <Link href="/register">Register</Link>
    </div>
  );
};

export default LandingPage;
