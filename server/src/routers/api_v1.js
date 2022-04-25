const { Router } = require('express');

const routerExercise = require('./exercise/exercise.router');

const api = Router();

api.use('/exercise', routerExercise);

module.exports = api;