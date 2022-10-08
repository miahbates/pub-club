import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { createUser } from "../../../database/model";

export default withApiAuthRequired(async function handler(req, res) {
  const session = getSession(req, res);
  console.log(session?.user, "session");
  console.log("1 $$$$$$$$");
  if (session?.user) {
    const query = await createUser(session.user.email);
    console.log(query, "query");
  }

  res.redirect(301, "/home");
});
