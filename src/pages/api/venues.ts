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
  const body = req.body;

  console.log("received", body);

  const inserted = await addVenue(body);

  if (req.headers["x-xhr"] == "true") {
    res.status(200).json(inserted);
  } else {
    res.redirect("/home?venueAdded=true");
  }
}
