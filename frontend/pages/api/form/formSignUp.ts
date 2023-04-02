import type { NextApiRequest, NextApiResponse } from "next";
import { dataFormSignUp } from "../../../types/account";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<dataFormSignUp>
) {
  res.status(200).json([
    {
      id: "firstname",
      name: "prénom",
      example: "John",
      type: "text",
      required: true,
    },
    {
      id: "name",
      name: "nom",
      example: "Doe",
      type: "text",
      required: true,
    },
    {
      id: "password",
      name: "mot de passe",
      example: "**************",
      type: "password",
      required: true,
    },
    {
      id: "passwordConfirm",
      name: "confirmer le mot de passe",
      example: "**************",
      type: "password",
      required: true,
    },
    {
      id: "email",
      name: "email",
      example: "john.doe@gmail.com",
      type: "email",
      required: true,
    },
    {
      id: "birthday",
      name: "date de naissance",
      example: "",
      type: "date",
      required: true,
    },
    {
      id: "phonenumber",
      name: "numéro de téléphone",
      example: "06 67 67 67 67",
      type: "number",
      required: true,
    },
    {
      id: "adress",
      name: "adresse",
      example: "20 rue des Alpes",
      type: "text",
      required: false,
    },
    {
      id: "city",
      name: "ville",
      example: "Tignes",
      type: "text",
      required: false,
    },
    {
      id: "zipCode",
      name: "Code postale",
      example: "73 320",
      type: "number",
      required: false,
    },
  ]);
}
