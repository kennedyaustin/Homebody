const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Get and Post for "/api/users"
router.route("/").get(usersController.findAll)

router.route("/currentUser").post(usersController.getCurrentUser);

// Get Put and Delete for "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  //.post(usersController.findAndPopulate)
  .put(usersController.update)
  .delete(usersController.remove);


module.exports = router;
