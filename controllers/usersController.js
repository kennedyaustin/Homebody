const db = require("../models");

module.exports = {
  //----[api/users/]

  //populate user workouts
  findById: function (req, res) {

    db.Users
    .findOne({ _id: req.user._id })
      .populate({path: 'savedWorkouts', model: 'Workouts', populate: {path: 'workout', model: 'Exercises'}}) 
      .then((dbModel) => {
        
        res.json(dbModel)
      })
      .catch((err) => res.status(422).json(err));
  },

  //----[api/users/:id]

  //update user info
  update: function (req, res) {
    db.Users
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  //remove user
  remove: function (req, res) {
    db.Users
      .findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  //----[api/users/currentUser]

  //get current user
  getCurrentUser: function (req, res) {
    res.json(req.user);
  },
};
