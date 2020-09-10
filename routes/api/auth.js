const router = require("express").Router();
const authController = require("../../controllers/authController");
const passport = require('passport')

router.route("/google").get(passport.authenticate("google", {
  scope: ["profile", "email"],
  prompt: "select_account",
}));
//router.route("/google").post(authController.googleLogin);

router
  .route("/google/callback")
  .get(passport.authenticate("google"), (req, res) => {
    res.redirect("/home");
  });

router.route("/facebook/").get(passport.authenticate("facebook", {
  authType: "reauthenticate",
}));

router
  .route("/facebook/callback")
  .get(passport.authenticate("facebook"), (req, res) => {
    res.redirect("/home");
  });

router.route("/logout").post((req, res) => {
  req.logout();
  res.send("logged out");
});


module.exports = router;