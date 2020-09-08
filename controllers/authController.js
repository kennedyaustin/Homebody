const db = require("../models/users");
const passport = require('passport')

module.exports = {
    // Google Auth Routes ------------------
    googleLogin: passport.authenticate("google", {
            scope: [
                "profile", "email"
            ]
     })
    ,
    googleCallback: passport.authenticate( 'google', { 
            successRedirect: '/auth/google/success',
            failureRedirect: '/auth/google/failure'
    })
    ,

    googleSuccess: function(req, res) {
        res.json("success google")
    },

    googleFailure: function(req, res) {
        res.json("failure google")
    },

    // Facebook Auth Routes ---------------
    facebookLogin: function(req, res) {
        passport.authenticate("facebook")
    },
    facebookCallback: function(req, res) {
        res.json(req.body)
    },

  };
  