const db = require("../models/");

module.exports = {
  findAll: function(req, res) {
    db.Workouts
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Workouts
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Workouts
      .create({})
      .then(dbModel => 
        {
          db.Workouts.updateOne({_id: dbModel._id}, {workout: req.body})
          .then(results => {
            db.Users.updateOne({_id: req.user._id}, {$push: {savedWorkouts: dbModel._id}}) 
            .then(r => res.json(r)) 
          })
          
        })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Workouts
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Workouts
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
