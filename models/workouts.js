const mongoose = require('mongoose')
const Schema = mongoose.Schema
const workoutsSchema = new Schema({

    workout: [{
        type: Schema.Types.ObjectId,
        ref: "Exercises"
    }]


})
const Workouts = mongoose.model("Workouts", workoutsSchema)
module.exports = Workouts