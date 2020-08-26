const mongoose = require('mongoose')
const Schema = mongoose.Schema
const exercisesSchema = new Schema({
    
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

    alternatives:[{
        type: Array,
        required: true
    }]
})
const Exercises = mongoose.model("Exercises", exercisesSchema)
module.exports = Exercises