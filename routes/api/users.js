const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Get and Post for "/api/books"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Get Put and Delete for "/api/books/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;
