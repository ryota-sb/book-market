import { NextApiRequest, NextApiResponse } from "next";
import { Author } from "../../../src/type";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Author[]>
) {
  const authors = await prisma.author.findMany();
  res.status(200).json(authors);
}
