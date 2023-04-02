import type { NextApiRequest, NextApiResponse } from "next";
import { createProductInput } from "../../../types/product";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<createProductInput>
) {
  res.status(200).json([
    {
        id: "name",
        name: "nom",
        type: "text",
      },
      {
        id: "price",
        name: "prix",
        type: "number",
      },
      {
        id: "smallDescription",
        name: "petite description",
        type: "text",
      },
      {
        id: "bigDescription",
        name: "grande description",
        type: "text",
      },
      {
        id: "brand",
        name: "marque",
        type: "text",
      },
  ]);
}
