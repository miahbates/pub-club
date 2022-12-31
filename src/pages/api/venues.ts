// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { addVenue } from "../../../database/model";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // get request body
  const body = req.body;

  // { name: "The Venue" }

  console.log("received", body);

  // add to database
  const inserted = await addVenue(body);

  if (req.headers["x-xhr"] == "true") {
    res.status(200).json(inserted);
  } else {
    // redirect to /home
    res.redirect("/home?venueAdded=true");
  }
}
