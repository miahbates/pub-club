import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
import { createUser, searchDbUsers } from "../../../database/model";

export default withApiAuthRequired(async function handler(req, res) {
  const session = getSession(req, res);

  if (session?.user) {
    const searchDbUsersQuery = await searchDbUsers(session?.user.email);
    if (searchDbUsersQuery) {
      console.log(searchDbUsersQuery, "searchDbUsersQuery");
      res.redirect(301, "/home");
    } else {
      await createUser(session.user.email);
      res.redirect(301, "/home");
    }
  }

  res.redirect(301, "/home");
});
