// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { imgHomeData } from "../../types/home";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<imgHomeData>
) {
  res.status(200).json([
    {
      name: "Chausssures",
      url: "/shoes.jpg",
      width: 800,
      height: 800,
    },
    {
      name: "Habits",
      url: "/clothes.jpg",
      width: 800,
      height: 800,
    },
    {
      name: "Accessoires",
      url: "/items.jpg",
      width: 800,
      height: 800,
    },
  ]);
}
