const db = require("../models/");

module.exports = {

  //----[api/workouts/]

  //query for all workouts in collection
  findAll: function(req, res) {
    db.Workouts
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  //create a workout 
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

  //-----[api/workouts/:id]

  //query for a workout with a specific id
  findById: function(req, res) {
    db.Workouts
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },


  //update a workout with a specific id
  update: function(req, res) {
    db.Workouts
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //remove a workout with a specific id
  remove: function(req, res) {
    db.Workouts
      .findOneAndDelete({ _id: req.params.id })
      .then(() => db.Users.findOneAndUpdate({ _id: req.user._id}, {$pull: { savedWorkouts: {$in: [ req.params.id ]}}})
        .then(model => res.json(model.savedWorkouts))
      )
      .catch(err => res.status(422).json(err));
  }
};
