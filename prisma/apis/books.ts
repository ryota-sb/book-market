import { prisma } from "./prismaClient";

// 本のリスト取得
export const prismaBookFindMany = async () => {
  return await prisma.book.findMany({
    include: {
      author: true,
    },
  });
};
