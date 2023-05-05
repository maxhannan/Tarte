import type { Prisma } from "@prisma/client";
import { prisma } from "./prisma.server";

interface Recipe {
  name: string;
  category: string;
  allergens: string[];
  yieldAmt: string;
  savedImages: string[];
  yieldUnit: string;
  ingredients: Ingredient[];
  steps: string[];
}

interface Ingredient {
  ingredient: string;
  qty: string;
  unit: string;
  linkId: string | undefined;
}

export const extractRecipe = (form: FormData) => {
  const name = form.get("recipeName") as string;
  const category = form.get("category") as string;
  const yieldAmt = form.get("yieldAmt") as string;
  const yieldUnit = form.get("yieldUnit") as string;
  const allergies = form.get("allergies") as string;
  const iNames = form.getAll("ingredientName") as string[];
  const linkIds = form.getAll("recipeLinkId") as string[];
  const ingredientAmts = form.getAll("ingredientAmt") as string[];
  const ingredientUnits = form.getAll("ingredientUnit") as string[];
  const steps = form.getAll("recipeStep") as string[];
  const savedImages = JSON.parse(form.get("imageLinks") as string);

  const ingredients = iNames.map((n, i) => {
    return {
      ingredient: n,
      qty: ingredientAmts[i],
      unit: ingredientUnits[i],
      linkId: linkIds[i].length > 0 ? linkIds[i] : undefined,
    };
  });
  console.log({ iNames, ingredientAmts, ingredientUnits, linkIds });
  console.log({
    name,
    category,
    savedImages,
    yieldAmt,
    yieldUnit,
    allergens: allergies.length > 0 ? allergies?.split(",") : [],
    ingredients,
    steps,
  });
  return {
    name,
    category,
    savedImages,
    yieldAmt,
    yieldUnit,
    allergens: allergies.length > 0 ? allergies?.split(",") : [],
    ingredients,
    steps,
  };
};

export const createRecipe = async (recipe: Recipe, userId: string) => {
  const {
    name,
    category,
    allergens,
    yieldUnit,
    yieldAmt,
    ingredients,
    steps,
    savedImages,
  } = recipe;

  const newRecipe = await prisma.recipe.create({
    data: {
      name,
      images: savedImages || [],
      category,
      allergens,
      yieldUnit,
      yieldAmt,
      steps,
      ingredients: {
        create: [...ingredients],
      },

      author: { connect: { id: userId } },
    },
  });
  return newRecipe;
};

export const updateRecipe = async (id: string, recipe: Recipe) => {
  const {
    name,
    category,
    allergens,
    yieldUnit,
    yieldAmt,
    ingredients,
    steps,
    savedImages,
  } = recipe;
  console.log({ ingredients });
  const data = await prisma.$transaction([
    prisma.ingredient.deleteMany({ where: { recipeId: id } }),
    prisma.recipe.update({
      where: { id: id },
      data: {
        name,
        category,
        images: savedImages || [],
        allergens,
        yieldUnit,
        yieldAmt,
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

export type FullRecipes = Prisma.PromiseReturnType<typeof getRecipes>;

export const getRecipes = async () => {
  try {
    const recipes = await prisma.recipe.findMany({
      where: {
        dish: false,
      },
      orderBy: [
        {
          name: "asc",
        },
      ],
      select: {
        id: true,
        name: true,
        category: true,
        allergens: true,
        ingredients: {
          select: {
            linkRecipe: {
              select: {
                allergens: true,
              },
            },
          },
        },
        author: {
          select: {
            firstName: true,
            lastName: true,
            username: true,
          },
        },
      },
    });

    return recipes;
  } catch (error) {
    return null;
  }
};

export type CompleteRecipe = Prisma.PromiseReturnType<typeof getRecipeById>;

export const getRecipeById = async (id: string) => {
  try {
    const recipe = prisma.recipe.findUnique({
      where: { id: id },
      include: {
        author: true,
        ingredients: {
          include: {
            linkRecipe: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
        linkedIngredients: {
          select: {
            recipe: {
              select: {
                id: true,
                name: true,
                dish: true,
              },
            },
          },
        },
      },
    });
    return recipe;
  } catch (error) {
    return null;
  }
};
