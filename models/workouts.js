const mongoose = require('mongoose')
const Schema = mongoose.Schema
const workoutsSchema = new Schema({

    workout: [{
        type: Schema.Types.ObjectId,
        ref: "Exercises"
    }],
    created: {
        type: Schema.Types.Date,
        default: new Date()
    }


})
const Workouts = mongoose.model("Workouts", workoutsSchema)
module.exports = Workouts