import type { Prisma } from "@prisma/client/edge";
import { prisma } from "./prisma.server";

export const extractMenu = (form: FormData) => {
  const name = form.get("menuName") as string;
  const service = form.get("service") as string;
  const sections = form.getAll("sectionName") as string[];
  const dishSections = form.getAll("dishSection") as string[];
  const linkIds = form.getAll("dishLinkId") as string[];

  const dishes = linkIds.map((l, i) => ({
    section: dishSections[i],
    id: l,
  }));

  return {
    name,
    service,
    sections: sections.map((s) => ({ name: s })),
    dishes,
  };
};

export const extractDish = (form: FormData) => {
  const name = form.get("dishName") as string;

  const allergies = form.get("allergies") as string;
  const iNames = form.getAll("ingredientName") as string[];
  const linkIds = form.getAll("recipeLinkId") as string[];
  const ingredientAmts = form.getAll("ingredientAmt") as string[];
  const ingredientUnits = form.getAll("ingredientUnit") as string[];
  const steps = form.getAll("recipeStep") as string[];
  const notes = form.getAll("recipeNote") as string[];

  const ingredients = iNames.map((n, i) => {
    return {
      ingredient: n,
      qty: ingredientAmts[i],
      unit: ingredientUnits[i],
      linkId: linkIds[i].length > 0 ? linkIds[i] : undefined,
    };
  });

  return {
    name,
    allergens: allergies.length > 0 ? allergies?.split(",") : [],
    ingredients,
    steps,
    notes,
  };
};

type dishData = ReturnType<typeof extractDish>;

export const createDish = async (dish: dishData, userid: string) => {
  const { name, allergens, ingredients, steps, notes } = dish;
  try {
    const savedDish = await prisma.recipe.create({
      data: {
        name,
        dish: true,
        category: "dish",
        allergens,
        yieldAmt: "",
        yieldUnit: "",
        steps,
        Notes: notes,
        ingredients: {
          create: [...ingredients],
        },

        author: { connect: { id: userid } },
      },
    });
    return savedDish;
  } catch (error) {
    return null;
  }
};

export const deleteMenu = async (id: string) => {
  await prisma.menu.delete({
    where: {
      id: id,
    },
  });

  return null;
};
export const updateDish = async (id: string, dish: dishData) => {
  const { name, allergens, ingredients, steps, notes } = dish;

  const data = await prisma.$transaction([
    prisma.ingredient.deleteMany({ where: { recipeId: id } }),
    prisma.recipe.update({
      where: { id: id },
      data: {
        name,
        allergens,
        Notes: notes,
        steps,
        ingredients: {
          create: [...ingredients],
        },
      },
      include: {
        ingredients: true,
        author: true,
      },
    }),
  ]);

  return data[1];
};

export type MenuSummaries = Prisma.PromiseReturnType<typeof getMenus>;

export const getMenus = async () => {
  try {
    const menus = await prisma.menu.findMany({
      orderBy: {
        name: "asc",
      },
      select: {
        _count: {
          select: {
            dishes: true,
            sections: true,
          },
        },
        id: true,
        name: true,
        service: true,
        sections: {
          select: {
            name: true,
            id: true,
            _count: {
              select: {
                dishes: true,
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
        _count: {
          select: {
            dishes: true,
            sections: true,
          },
        },
        createdAt: true,
        updatedAt: true,
        name: true,
        id: true,
        service: true,
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
                _count: {
                  select: {
                    ingredients: true,
                    linkedIngredients: true,
                    menu: true,
                    section: true,
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
            allergens: true,
            category: true,
            _count: {
              select: {
                ingredients: true,
                linkedIngredients: true,
                menu: true,
                section: true,
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

export const getSections = async () => {
  try {
    const sections = await prisma.menuSection.findMany({
      select: {
        name: true,
        id: true,
        dishes: {
          select: {
            id: true,
            name: true,
            allergens: true,
            category: true,
            _count: {
              select: {
                section: true,
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
    return sections;
  } catch (error) {
    return null;
  }
};

export const getSectionbyId = async (id: string) => {
  try {
    const section = await prisma.menuSection.findUnique({
      where: {
        id: id,
      },
      select: {
        name: true,
        id: true,
        dishes: {
          select: {
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
            _count: {
              select: {
                ingredients: true,
                linkedIngredients: true,
                menu: true,
                section: true,
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
    return section;
  } catch (error) {
    return null;
  }
};

export type FullSection = Prisma.PromiseReturnType<typeof getSectionbyId>;

export type DishSummaries = Prisma.PromiseReturnType<typeof getDishes>;

export const getDishes = async () => {
  try {
    const dishes = await prisma.recipe.findMany({
      where: {
        dish: true,
      },
      select: {
        _count: {
          select: {
            ingredients: true,
            linkedIngredients: true,
            menu: true,
            section: true,
          },
        },
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

type menuForm = ReturnType<typeof extractMenu>;

export const createMenu = async (menu: menuForm, authorId: string) => {
  try {
    console.log("dishes", menu.dishes);
    const dishes = menu.dishes;
    const dishIds = dishes.map((d) => ({ id: d.id }));
    const savedMenu = await prisma.menu.create({
      data: {
        name: menu.name,
        service: menu.service,
        author: {
          connect: {
            id: authorId,
          },
        },
        sections: {
          createMany: {
            data: menu.sections,
          },
        },
        dishes: {
          connect: dishIds,
        },
      },
      include: {
        sections: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
    console.log(dishes);
    console.log("sections", savedMenu.sections, menu.sections);
    await prisma.$transaction(
      dishes.map((dish) =>
        prisma.recipe.update({
          where: { id: dish.id },
          data: {
            section: {
              connect: {
                id: savedMenu.sections.find((s) => s.name === dish.section)?.id,
              },
            },
          },
        })
      )
    );
    console.log(savedMenu);
    return savedMenu;
  } catch (error) {
    console.log(error);
    return null;
  }
};
