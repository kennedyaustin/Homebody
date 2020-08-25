const mongoose = require('mongoose')
const Schema = mongoose.Schema
const exercisesSchema = new mongoose.Schema({
    exerciseName: {
        type: String,
        required: true
    },
    excersiseInfo:{
        type: String,
        required: true
    },
    target:{
        type: String,
        required: true
    },
    alternatives:{
        type: String,
        required: true
    }
})
const Exercise = mongoose.model("Exercise", exercisesSchema)
module.exports = Exercise