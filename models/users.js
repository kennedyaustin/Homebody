const mongoose = require("mongoose");
const Schema = mongoose.Schema;
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

  provider: {
    type: String,
  },

  providerId: {
    type: String,
  },

  savedWorkouts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Workouts",
    },
  ],
});
const Users = mongoose.model("Users", usersSchema);
module.exports = Users;
