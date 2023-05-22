const { Router } = require('express');
const recipesRouter = require('./recipesRouter');
const dietsRouter = require('./dietsRouter.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers

router.use('/recipes', recipesRouter);
router.use('/diets', dietsRouter);
// Ejemplo: router.use('/auth', authRouter);




module.exports = router;
