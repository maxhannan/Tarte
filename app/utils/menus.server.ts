import type { Prisma } from "@prisma/client/edge";
import { prisma } from "./prisma.server";

export const extractDish = (form: FormData) => {
  const name = form.get("dishName") as string;

  const menuLink = form.get("menuLinkId");
  const sectionLink = form.get("sectionLinkId");
  const allergies = form.get("allergies") as string;
  const iNames = form.getAll("ingredientName") as string[];
  const linkIds = form.getAll("recipeLinkId") as string[];
  const ingredientAmts = form.getAll("ingredientAmt") as string[];
  const ingredientUnits = form.getAll("ingredientUnit") as string[];
  const steps = form.getAll("recipeStep") as string[];
  console.log({
    name,
    allergies,
    menuLink,
    sectionLink,
    iNames,
    linkIds,
    ingredientAmts,
    ingredientUnits,
    steps,
  });
  const ingredients = iNames.map((i) => {
    return {
      ingredient: i,
      qty: ingredientAmts[iNames.indexOf(i)],
      unit: ingredientUnits[iNames.indexOf(i)],
      linkId:
        linkIds[iNames.indexOf(i)].length > 0
          ? linkIds[iNames.indexOf(i)]
          : undefined,
    };
  });

  return {
    name,

    menuLink,
    sectionLink,
    allergens: allergies.length > 0 ? allergies?.split(",") : [],
    ingredients,
    steps,
  };
};

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
        sections: {
          select: {
            name: true,
            id: true,
            _count: true,
          },
        },
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
                allergens: true,
                category: true,
                _count: true,

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
            allergens: true,
            category: true,
            _count: true,

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
    const dishes = await prisma.recipe.findMany({
      where: {
        dish: true,
      },
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
        allergens: true,
        category: true,
        menu: {
          select: {
            id: true,
            name: true,
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
    return dishes;
  } catch (error) {
    return null;
  }
};

export type FullDish = Prisma.PromiseReturnType<typeof getDishById>;

export const getDishById = async (id: string) => {
  try {
    const dish = await prisma.recipe.findUnique({
      where: {
        id: id,
      },
      include: {
        menu: {
          select: {
            name: true,
            id: true,
          },
        },

        author: true,
        ingredients: {
          include: {
            linkRecipe: {
              select: {
                id: true,
                name: true,
                category: true,

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
      },
    });
    return dish;
  } catch (error) {
    return null;
  }
};
