const bcrypt = require('bcrypt')
const User = require("../models/users")
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const FacebookStrategy = require('passport-facebook').Strategy
require('dotenv').config()

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user)
    })
})

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: "/api/auth/google/callback",
},
(token, tokenSecret, profile, done) => {
    return done(profile)
}))



passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_ID,
    clientSecret: process.env.FACEBOOK_SECRET,
    callbackURL: "/api/auth/facebook/callback"

},
(accessToken, refreshToken, profile, done) => {
    return done(profile)
}))