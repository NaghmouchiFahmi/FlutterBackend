import ReviewModel from '../models/review.js';
import RecipeModel from '../models/recipe.js';

/**
 * @param {String} name
 * @param {String} review
 *
 * */

export async function create(name, review, recipe) {
    try{
        const recipe = await ReviewModel.recipe.getById(recipeId);

    if (!recipe) {
      // Handle the case where the recipe is not found
      console.error('Recipe not found');
      return null;
    }
    return await ReviewModel.create({
        name: name,
        createdAt: new Date(),
        review: review,
        recipe: recipe ,
    });
}
catch (error) {
    // Handle the error (e.g., log it, throw it, or return a specific response)
    console.error('Error creating review:', error);
    throw error;
  }

}

export async function getAll() {
    return await ReviewModel.find({});
}

/**
 * @param {any} id
 */
export async function getById(id) {
    return await ReviewModel.findOne({ _id: id });
}

/**
 * @param {String} name
 * @param {String} review
 *
 * */

export async function editById(id, name, review) {
    return await ReviewModel.updateOne(
        {
            _id: id,
        },
        {
            $set: {
                name: name,
                updatedAt: new Date(),
                review: review,
            },
        },
        {
            upsert: false,
        }
    );
}

/**
 * @param {any} id
 */
export async function deleteById(id) {
    return await ReviewModel.deleteOne({ _id: id });
}

export async function deleteReviewByRecipe(recipe) {
    return await ReviewModel.deleteMany({ recipe: recipe });
}
