// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { allCategoryData } from "../../types/home";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<allCategoryData>
) {
  res.status(200).json([
    {
      name: "chausssures",
      url: "/shoes.jpg",
      width: 800,
      height: 800,
    },
    {
      name: "habits",
      url: "/clothes.jpg",
      width: 800,
      height: 800,
    },
    {
      name: "accessoires",
      url: "/items.jpg",
      width: 800,
      height: 800,
    },
  ]);
}
