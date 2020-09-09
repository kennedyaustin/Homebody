const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Get and Post for "/api/users"
router.route("/").get(usersController.findAll).post(usersController.login);

router.route("/currentUser").post(usersController.getCurrentUser);

// Get Put and Delete for "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

router.route("/login").post(usersController.postById);

module.exports = router;
