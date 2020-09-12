//define express router
const router = require("express").Router();

//import workout routes controller
const workoutsController = require("../../controllers/workoutsController");

//router for path - api/workouts
router.route("/")
  .get(workoutsController.findAll)
  .post(workoutsController.create)
//router for path - api/workouts/:id
router.route("/:id")
  
  .get(workoutsController.findById)
  .put(workoutsController.update)
  .delete(workoutsController.remove);

//export router
module.exports = router;
