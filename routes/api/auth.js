const router = require("express").Router();
const authController = require("../../controllers/authController");
const passport = require("passport")

router.route("/google")
  .get(passport.authenticate("google", {
    scope: [
        "profile", "email"
    ]
}))

router.route('/google/callback')
.get(passport.authenticate( 'google', { 
    successRedirect: '/auth/google/success',
    failureRedirect: '/auth/google/failure'
}))

router.route("/google/success")
  .get(function(req, res) {
    res.json("success google")
    },)

router.route('/google/failure')
.get(function(req, res) {
    res.json("success failure")
    })

router.route("/facebook/")
.get(function(req, res) {
    res.json("success facebook")
    },)

router.route("/facebook/callback")
.get(function(req, res) {
    res.json("facebook callback")
})

module.exports = router;
