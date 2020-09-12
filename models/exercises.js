const mongoose = require('mongoose')
const Schema = mongoose.Schema

//create Exercises schema
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

//create Exercises model
const Exercises = mongoose.model("Exercises", exercisesSchema)

//export model
module.exports = Exercises