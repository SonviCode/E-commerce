import type { NextApiRequest, NextApiResponse } from "next";
import { productFilter } from "../../types/product";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<productFilter>
) {
  res.status(200).json([
    {
      name: "tailles",
      filterData: ["S", "M", "L", "XL"],
    },
    {
      name: "sport",
      filterData: ["rando", "alpinisme", "vélo"],
    },
    {
      name: "type",
      filterData: ["veste", "t-shirt", "pantalon", "chaussette"],
    },
    {
      name: "marque",
      filterData: ["lafuma", "millet", "forclaz", "aliexpress"],
    },
    {
      name: "sexe",
      filterData: ["homme", "femme"],
    },
  ]);
}
