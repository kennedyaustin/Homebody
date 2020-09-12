const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Users schema
const usersSchema = new Schema({

  firstName: {
    type: String,
  },

  lastName: {
    type: String,
  },

  email: {
    type: String,
  },

  profileImage: {
    type: String,
  },

  //name of login provider
  provider: {
    type: String,
  },

  //id returned from provider
  providerId: {
    type: String,
  },

  //array of workout id's
  savedWorkouts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Workouts",
    },
  ],
});

//create Users model
const Users = mongoose.model("Users", usersSchema);

//export model
module.exports = Users;
