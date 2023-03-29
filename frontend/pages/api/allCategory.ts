// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  ACCESSORY_CATEGORY,
  SHOES_CATEGORY,
  CLOTHES_CATEGORY,
} from "../../constants/Constants";
import { allCategoryData } from "../../types/home";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<allCategoryData>
) {
  res.status(200).json([
    {
      name: "chausssures",
      url: "/shoes.jpg",
      text: SHOES_CATEGORY,
      width: 800,
      height: 800,
    },
    {
      name: "habits",
      url: "/clothes.jpg",
      text: CLOTHES_CATEGORY,
      width: 800,
      height: 800,
    },
    {
      name: "accessoires",
      url: "/items.jpg",
      text: ACCESSORY_CATEGORY,
      width: 800,
      height: 800,
    },
  ]);
}
