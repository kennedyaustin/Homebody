const router = require("express").Router();
const workoutsController = require("../../controllers/workoutsController");

// Get and Post for "/api/books"
router.route("/")
  .get(workoutsController.findAll)
  .post(workoutsController.create); 

// Get Put and Delete for "/api/books/:id"
router
  .route("/:id")
  .get(workoutsController.findById)
  .put(workoutsController.update)
  .delete(workoutsController.remove);

module.exports = router;
