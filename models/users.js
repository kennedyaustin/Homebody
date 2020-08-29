const mongoose = require('mongoose')
const Schema = mongoose.Schema
const usersSchema = new Schema({

    username: {
        type: String,
        required: true,
        unique: true
    },
 
    email: {
        type: String,
        required: true,
        unique: true
    },

    password:{
        type: String,
        required: true
    },

    savedWorkouts: [{
        type: Schema.Types.ObjectId,
        ref: "Workouts"
        
    }]

})
const Users = mongoose.model("Users", usersSchema)
module.exports = Users