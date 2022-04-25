const { Router } = require('express');

const { httpGetAllExercise } = require('./exercise.controller');

const router = Router();

router.get('/', httpGetAllExercise);

module.exports = router;