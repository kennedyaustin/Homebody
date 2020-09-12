const db = require("../models/exercises");

module.exports = {
  //----[api/exercises/]

  //query for all exercise 
  findAll: function(req, res) {
    db
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  //query for exercises by target
  findByTargets: function(req, res) {
    db
      .find({ target: {$in: [...req.body]}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
};
