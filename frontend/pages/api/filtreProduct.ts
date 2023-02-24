import type { NextApiRequest, NextApiResponse } from "next";
import { productFilter } from "../../types/product";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<productFilter>
) {
  res.status(200).json([
    {
      name: "tailles",
      keyRequest: "size",
      filterData: ["S", "M", "L", "XL"],
    },
    {
      name: "sport",
      keyRequest: "sport",
      filterData: ["rando", "alpinisme", "vélo"],
    },
    {
      name: "type",
      keyRequest: "type",
      filterData: ["veste", "t-shirt", "pantalon", "chaussette"],
    },
    {
      name: "marque",
      keyRequest: "brand",
      filterData: ["lafuma", "millet", "forclaz", "aliexpress"],
    },
    {
      name: "sexe",
      keyRequest: "sex",
      filterData: ["homme", "femme"],
    },
  ]);
}
