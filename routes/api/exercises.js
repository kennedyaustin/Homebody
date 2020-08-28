const router = require("express").Router();
const exercisesController = require("../../controllers/exercisesController");

// Get and Post for "/api/target"
router.route("/")
  .get(exercisesController.findAll)
  .post(exercisesController.findByTargets);

// Get Put and Delete for "/api/target/:id"
router
  .route("/:target/:num")
  .get(exercisesController.findByTarget)
  .put(exercisesController.update)
  .delete(exercisesController.remove);

module.exports = router;
