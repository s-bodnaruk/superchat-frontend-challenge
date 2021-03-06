import type { NextApiRequest, NextApiResponse } from "next";

import Link from "@/models/LinkSchema";
import dbConnect from "@/utils/dbConnect";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const link = await Link.findOne({ shortLinkId: id });

        if (!link) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, link: link });
      } catch (error) {
        res.status(400).json({ success: false });
      }

      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
