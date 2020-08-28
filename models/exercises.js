const mongoose = require('mongoose')
const Schema = mongoose.Schema
const exercisesSchema = new Schema({
    
    exerciseName: {
        type: String,
    },

    exerciseInfo:{
        type: String,
    },

    target:{
        type: String,
    },

    alternatives:[{
        type: Array,
    }]
})
const Exercises = mongoose.model("Exercises", exercisesSchema)
module.exports = Exercises