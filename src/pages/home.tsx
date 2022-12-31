import type { NextPage } from "next";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { Home } from "../components";
import { getVenues } from "../../database/model";

type TVenue = {
  id: number;
  name: string;
};

type THomepageProps = {
  venues: Array<TVenue>;
};

const Homepage: NextPage<THomepageProps> = (props) => {
  return <Home venues={props.venues} />;
};

export default Homepage;

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const venues = await getVenues();

    // access the user session
    // const session = getSession(ctx.req, ctx.res);
    return { props: { venues } };
  },
});
