import { handleAuth, handleCallback } from "@auth0/nextjs-auth0";

const afterCallback = (req, res, session, state) => {
  console.log("$$", session, state);
  return session;
};

console.log("BASE URL", process.env.AUTH0_BASE_URL);

export default handleAuth({
  async callback(req, res) {
    try {
      console.log("BASE URL", process.env.AUTH0_BASE_URL);
      await handleCallback(req, res, { afterCallback });
    } catch (error) {
      console.log(error, "auth error");
      res.status(error.status || 500).end(error.message);
    }
  },
});
