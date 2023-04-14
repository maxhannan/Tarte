import type { Prisma } from "@prisma/client/edge";
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

export type FullMenu = Prisma.PromiseReturnType<typeof getMenuById>;

export const getMenuById = async (id: string) => {
  try {
    const menu = await prisma.menu.findUnique({
      where: {
        id: id,
      },
      select: {
        _count: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        id: true,
        sections: {
          select: {
            name: true,
            id: true,
            dishes: {
              select: {
                id: true,
                name: true,
                recipes: {
                  select: {
                    _count: true,
                  },
                },
                author: {
                  select: {
                    firstName: true,
                    lastName: true,
                  },
                },
              },
            },
          },
        },
        author: {
          select: {
            firstName: true,
            lastName: true,
          },
        },

        dishes: {
          select: {
            id: true,
            name: true,
            recipes: {
              select: {
                _count: true,
              },
            },
            author: {
              select: {
                firstName: true,
                lastName: true,
              },
            },
          },
        },
      },
    });
    return menu;
  } catch (error) {
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
