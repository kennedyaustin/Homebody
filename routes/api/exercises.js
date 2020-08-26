const router = require("express").Router();
const exercisesController = require("../../controllers/exercisesController");

// Get and Post for "/api/books"
router.route("/")
  .get(exercisesController.findAll)
  .post(exercisesController.create);

// Get Put and Delete for "/api/books/:id"
router
  .route("/:id")
  .get(exercisesController.findById)
  .put(exercisesController.update)
  .delete(exercisesController.remove);

module.exports = router;
