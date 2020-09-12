const passport = require('passport')

//create router definition
const router = require("express").Router();

//router for path - /api/auth/google
router.route("/google").get(passport.authenticate("google", {
  scope: ["profile", "email"],
  prompt: "select_account",
}));

//router for path - /api/auth/google/callback
router
  .route("/google/callback")
  .get(passport.authenticate("google"), (req, res) => {
    res.redirect("/home");
  });

//router for path - api/auth/facebook
router.route("/facebook/").get(passport.authenticate("facebook", {
  authType: "reauthenticate",
}));

//router for path - api/auth/facebook/callback
router
  .route("/facebook/callback")
  .get(passport.authenticate("facebook"), (req, res) => {
    res.redirect("/home");
  });

//router for path - api/auth/logout
router.route("/logout").post((req, res) => {
  req.logout();
  res.send("logged out");
});

//export router
module.exports = router;