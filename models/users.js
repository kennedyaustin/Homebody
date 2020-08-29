const mongoose = require('mongoose')
const Schema = mongoose.Schema
const usersSchema = new Schema({

    firstName: {
        type: String,
        required: true,
    },

    lastName: {
        type: String,
    },
 
    email: {
        type: String,
        required: true,
        unique: true
    },

    profileImage: {
        type: String
    },

    savedWorkouts: [{
        type: Schema.Types.ObjectId,
        ref: "Workouts"
        
    }]

})
const Users = mongoose.model("Users", usersSchema)
module.exports = Users