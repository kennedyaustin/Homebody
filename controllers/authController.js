const passport = require("passport");

module.exports = {
  // [api/auth/google]
  googleLogin: passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  }),

  // [api/auth/google/callback]
  googleCallback: passport.authenticate("google"),

  // [api/auth/facebook]
  facebookLogin: passport.authenticate("facebook", {
    authType: "reauthenticate",
  }),

  //[api/auth/facebook/callback]
  facebookCallback: passport.authenticate("facebook"),

  // [api/auth/logout]
  logout: (req, res) => {
    req.logout();
    res.send("logged out");
  },
};
