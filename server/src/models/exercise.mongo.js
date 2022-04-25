const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    exerciseId: {
        type: Number,
        required: true,
    },
    exerciseText: {
        type: String,
        required: true,
    },
    exerciseResult: {
        type: Number,
        required: true,
    }
});

exerciseModel = mongoose.model('Excercise', exerciseSchema);

module.exports = exerciseModel;