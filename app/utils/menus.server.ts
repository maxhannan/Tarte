import { Prisma } from "@prisma/client/edge";
import { prisma } from "./prisma.server";

export type MenuSummaries = Prisma.PromiseReturnType<typeof getMenus>;

export const getMenus = async () => {
  try {
    const menus = await prisma.menu.findMany({
      orderBy: {
        name: "asc",
      },
      select: {
        _count: true,
        id: true,
        name: true,

        author: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
        createdAt: true,
      },
    });

    return menus;
  } catch (error) {
    console.log({ error });
    return null;
  }
};

export type DishSummaries = Prisma.PromiseReturnType<typeof getDishes>;

export const getDishes = async () => {
  try {
    const dishes = await prisma.dish.findMany({
      select: {
        _count: true,
        author: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
        id: true,
        name: true,
        Menus: {
          select: {
            name: true,
            id: true,
          },
        },
      },
    });
    return dishes;
  } catch (error) {
    return null;
  }
};
