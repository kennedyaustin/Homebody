const router = require("express").Router();
const authController = require("../../controllers/authController");

router.route("/google").get(authController.googleLogin);

router
  .route("/google/callback")
  .get(authController.googleCallback, (req, res) => {
    res.redirect("/home");
  });

router.route("/facebook/").get(authController.facebookLogin);

router
  .route("/facebook/callback")
  .get(authController.facebookCallback, (req, res) => {
    res.redirect("/home");
  });

router.route("/logout").get(authController.logout);

module.exports = router;
