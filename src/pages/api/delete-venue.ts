// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { addVenue, deleteVenue } from "../../../database/model";

type Data = {
  id: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // get request body
  const body = req.body;

  // { name: "The Venue" }

  console.log("received", body);

  // delete from database
  await deleteVenue(parseInt(body.id));

  if (req.headers["x-xhr"] == "true") {
    res.status(200).send(body);
  } else {
    res.redirect("/home?venueDeleted=true");
  }
}
