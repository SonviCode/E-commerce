import type { NextApiRequest, NextApiResponse } from "next";
import { createProductSelect } from "../../../types/product";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<createProductSelect>
) {
  res.status(200).json([
    { id: "sex", data: ["homme", "femme"] },
    { id: "type", data: ["veste", "t-shirt", "pantalon", "chaussette"] },
    { id: "category", data: ["habits", "chaussures", "accessoires"] },
    { id: "size", data: ["S", "M", "L", "XL"] },
    { id: "sport", data: ["rando", "alpinisme", "vélo"] },
  ]);
}
