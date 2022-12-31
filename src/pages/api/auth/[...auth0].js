import { handleAuth, handleCallback } from "@auth0/nextjs-auth0";

const afterCallback = (req, res, session, state) => {
  console.log("$$", session, state);
  return session;
};

export default handleAuth({
  async callback(req, res) {
    try {
      await handleCallback(req, res, { afterCallback });
    } catch (error) {
      console.log(error, "auth error");
      res.status(error.status || 500).end(error.message);
    }
  },
});
