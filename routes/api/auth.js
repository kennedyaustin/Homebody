const router = require("express").Router();
const authController = require("../../controllers/authController");

router.route("/google").post(authController.googleLogin);
//router.route("/google").post(authController.googleLogin);

router
  .route("/google/callback")
  .get(authController.googleCallback, (req, res) => {
    res.redirect("/home");
  });

router.route("/facebook/").post(authController.facebookLogin);

router
  .route("/facebook/callback")
  .get(authController.facebookCallback, (req, res) => {
    res.redirect("/home");
  });

router.route("/logout").post(authController.logout);

module.exports = router;
