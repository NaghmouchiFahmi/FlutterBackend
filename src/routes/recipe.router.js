import { Router } from 'express';

import {
    createRecipe,
    delRecipe,
    editRecipe,
    getRecipeById,
    getRecipes,
    updateRecipePhoto,
} from '../controller/recipe.controller.js';

import uploader from '../middlewares/uploader.js';

const router = Router();

router.route('/').post(createRecipe).get(getRecipes);

router
    .route('/:id')
    .patch(uploader(), updateRecipePhoto)
    .get(getRecipeById)
    .put(editRecipe)
    .delete(delRecipe);

export default router;
