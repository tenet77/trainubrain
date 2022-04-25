const exercise = require('./exercise.mongo');

let exerciseCount = 0;

async function getExercide(filter) {
    return await exercise.findOne(filter);
}

async function putExercise(data) {
    await exercise.findOneAndUpdate({
        exerciseId: data.exerciseId,
    }, data, {
        upsert: true,
    })
}

async function getAllExercise() {
    return await exercise.find({}, {
        _id: 0,
        __v: 0
    })
}

async function getExercise(count) {
    
    let arrayIds = [];
    for (let i=0; i < count;i++) {
        arrayIds.push(Math.round(Math.random() * exerciseCount));
    }
    
    return await exercise.find({
        exerciseId: {$in: arrayIds}
    }, {
        _id: 0,
        __v: 0
    });
}

async function getLastId() {
    let lastExercise = await exercise
        .findOne({})
        .sort('-exerciseId');
    
    return lastExercise.exerciseId;
}

async function loadAllExercise() {
    const firstEx = await getExercide({
        exerciseId: 1,
    });
    if (firstEx) {
        console.log('Exercise data already loaded')
    } else {
        populateData();
    };

    exerciseCount = await getLastId();
}

async function populateData() {
    
    console.log('Generating exercise data...');

    let exArray = generateExercise();
    let exId = 0;

    exArray.forEach((data) => {
        exId++;
        putExercise({
            exerciseId: exId,
            exerciseText: data.display,
            exerciseResult: data.result,
        })
    });

}

function generateExercise() {

    let c = 0;
    let exArray = [];

    for (let i = 1; i < 9; i++) {
        for (let j = 1; j < 9; j++) {
            for (let k = 1; k < 9; k++) {
                if (i === j || i === k || j === k) {
                    continue;
                }
                if (i + j - k > 0 && i + j - k < 10) {
                    exArray.push({
                        display: `${i} + ${j} - ${k}`,
                        result: i + j - k
                    });
                }
                if (i - j + k > 0 && i - j + k < 10) {
                    exArray.push({
                        display: `${i} - ${j} + ${k}`,
                        result: i - j + k
                    });
                }
            }    
        }    
    }    

    return exArray;

}

module.exports = {
    loadAllExercise,
    getAllExercise,
    getExercise,
}