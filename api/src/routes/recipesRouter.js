const { Router } = require('express');

const { getRecipes, getRecipe, postRecipe} =require('../handlers/recipesHandlers')
// const getRecipesById = require('../controllers/getRecipesById');
// const getRecipes = require('../controllers/getRecipes');
// const postRecipe = require('../controllers/postRecipe')

const recipesRouter = Router();

recipesRouter.get('/:id', getRecipe);
recipesRouter.get('/', getRecipes);
recipesRouter.post('/recipes', postRecipe);

module.exports = recipesRouter;