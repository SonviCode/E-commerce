// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { indicator } from "../../types/shop";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<indicator[]>
) {
  res.status(200).json([
    {
      actif: true,
      name: "Panier",
    },
    {
      actif: false,
      name: "Authentification",
    },
    {
      actif: false,
      name: "Livraison",
    },
    {
      actif: false,
      name: "Paiement",
    },
  ]);
}
