const { createRecipe, getRecipeById, getAllRecipes, getRecipeByName } = require('../controllers/recipesControllers');

const getRecipes = async (req, res) => {
    const { name } = req.query;
    try {
        const result = name ? await getRecipeByName(name) : await getAllRecipes();
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }

    
}

const getRecipe = async (req, res) => {
    const id = req.params;
    const source = isNaN(id) ? 'DB' : 'API';
    try {
        const recipe = await getRecipeById(id, source);
        res.status(200).json(recipe);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
    res.status(200).send('NIY: ESTA RUTA TRAERA LOS DETALLES DE UNA RECETA CON ID: ' + id)
}

const postRecipe = async (req, res) => {
    try {
        const { name, image, summary, healthScore, instructions } = req.body;
        const newRecipe = await createRecipe(name, image, summary, healthScore, instructions);
        res.status(201).json(newRecipe)
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
    
    res.status(200).send('NIY: Esta ruta podrá crear una nueva receta.')
}


module.exports = {
    getRecipes,
    getRecipe,
    postRecipe
}