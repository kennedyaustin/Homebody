///define express router
const router = require("express").Router();

//import exercise route controller definitions
const exercisesController = require("../../controllers/exercisesController");

// router for path - api/exercises/
router.route("/")
  .get(exercisesController.findAll)
  .post(exercisesController.findByTargets);

//export router
module.exports = router;
