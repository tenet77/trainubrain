const { 
    getAllExercise,
    getExercise,
} = require('../../models/exercise.model');

async function httpGetAllExercise(req, res) {
    
    let exercise = {};
    
    if (req.query.count) {
        exercise = await getExercise(Number(req.query.count));
    } else {
        exercise = await getAllExercise();
    }
    return res.status(200).json(exercise);
}

module.exports = {
    httpGetAllExercise,
}