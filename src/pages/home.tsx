import type { NextPage } from "next";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { Home } from "../components";

const Homepage: NextPage = () => {
  return <Home />;
};

export default Homepage;

export const getServerSideProps = withPageAuthRequired();
