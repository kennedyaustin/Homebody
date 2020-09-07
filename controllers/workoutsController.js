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
            console.log(dbModel)
            db.Users.updateOne({_id: '5f54134cd9cfff363c7cca1a'}, {$push: {savedWorkouts: dbModel._id}}) // replace with your user _id for now
            .then(r => res.json(r)) //req.session.userId or something like that
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
