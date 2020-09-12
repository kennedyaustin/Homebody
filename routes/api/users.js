//define express router 
const router = require("express").Router();

//import user controller route definitions
const usersController = require("../../controllers/usersController");

// router for path - api/users
router.route("/")
  .get(usersController.findById)

//router for path - api/users/currentUser
router.route("/currentUser")
  .post(usersController.getCurrentUser);

// router for path - api/users/:id
router.route("/:id")
  .put(usersController.update)
  .delete(usersController.remove);

//export router 
module.exports = router;
