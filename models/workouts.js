const mongoose = require('mongoose')
const Schema = mongoose.Schema

//create Workouts schema 
const workoutsSchema = new Schema({

    //array of exercise id's
    workout: [{
        type: Schema.Types.ObjectId,
        ref: "Exercises"
    }],

    //creation date
    created: {
        type: Schema.Types.Date,
        default: new Date()
    }

})

//create Workouts model
const Workouts = mongoose.model("Workouts", workoutsSchema)

//export model
module.exports = Workouts