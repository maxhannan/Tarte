import { prisma } from "./prisma.server";

interface Recipe {
  name: string;
  category: string;
  allergens: string[];
  yieldAmt: string;
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
  const linkIds = form.getAll("linkBoxId") as string[];
  const ingredientAmts = form.getAll("ingredientAmt") as string[];
  const ingredientUnits = form.getAll("ingredientUnit") as string[];
  const steps = form.getAll("recipeStep") as string[];

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
    category,
    yieldAmt,
    yieldUnit,
    allergens: allergies?.split(","),
    ingredients,
    steps,
  };
};

export const createRecipe = async (recipe: Recipe, userId: string) => {
  const { name, category, allergens, yieldUnit, yieldAmt, ingredients, steps } =
    recipe;

  const newRecipe = await prisma.recipe.create({
    data: {
      name,
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

export const getRecipes = async () => {
  try {
    const recipes = await prisma.recipe.findMany({
      orderBy: [
        {
          name: "asc",
        },
      ],
      select: {
        id: true,
        name: true,
        category: true,
        yieldAmt: true,
        yieldUnit: true,
        createdAt: true,
        allergens: true,
        steps: true,
        author: {
          select: {
            firstName: true,
            lastName: true,
            username: true,
          },
        },
        linkedIngredients: {
          select: {
            id: true,
            recipe: {
              select: {
                name: true,
                id: true,
              },
            },
          },
        },
        ingredients: {
          select: {
            ingredient: true,
            qty: true,
            unit: true,
            linkId: true,
            linkRecipe: {
              select: {
                name: true,
                id: true,
              },
            },
          },
        },
      },
    });
    return recipes;
  } catch (error) {
    return null;
  }
};