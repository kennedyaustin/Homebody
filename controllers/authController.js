const db = require("../models/users");
const passport = require("passport");

module.exports = {
  // Google Auth Routes ------------------
  googleLogin: passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  }),
  googleCallback: passport.authenticate("google"),

  // Facebook Auth Routes ---------------
  facebookLogin: passport.authenticate("facebook", {
    authType: "reauthenticate",
  }),
  facebookCallback: passport.authenticate("facebook"),

  logout: (req, res) => {
    req.logout();
    res.send("logged out");
  },
};
