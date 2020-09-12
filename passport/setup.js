//import passport.js
const passport = require("passport");

//import google and facebook strategies
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;

//import User database model
const Users = require("../models/users");

//load process.env keys
require("dotenv").config();


//encrypt user id and store in browser cookie
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//decrypt cookie, fetch user data, store in req.user
passport.deserializeUser((id, done) => {
  Users.findById(id).then((user) => {
    done(null, user);
  });
});

//Google strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.NODE_ENV === "production" ? "https://homebody-fitness.herokuapp.com/api/auth/google/callback": "http://localhost:3000/api/auth/google/callback",
      proxy: true,
    },
    (accessToken, refreshToken, profile, cb) => {

      //query for user with matching provider and provider.id
      Users.findOne({ provider: profile.provider, providerId: profile.id })
        .then((dbModel) => {

          //check if query doesn't return an existing user
          if (!dbModel) {
            //create a new user in database
            Users.create({
              providerId: profile.id,
              provider: profile.provider,
              profileImage: profile.photos[0].value,
              email: profile.emails[0].value,
              firstName: profile.name.givenName,
              lastName: profile.name.familyName,
            })
              .then((dbUser) => {

                //send this newly create user to serialize function
                cb(null, dbUser);
              })
              .catch((err) => {
                cb(err, null);
              });
          } else {
            //return existing user to serialize function
            cb(null, dbModel);
          }
        })
        .catch((err) => {
          cb(err, null);
        });
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: process.env.NODE_ENV === "production" ? "https://homebody-fitness.herokuapp.com/api/auth/facebook/callback": "http://localhost:3000/api/auth/facebook/callback",
      profileFields: ["id", "displayName", "photos", "email", "name"],
      auth_type: "reauthenticate",
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {

      //query for user with matching provider and provider.id
      Users.findOne({ provider: profile.provider, providerId: profile.id })
        .then((dbModel) => {

          //check if query does not return an existing user
          if (!dbModel) {

            //create a new user in the database
            Users.create({
              providerId: profile.id,
              provider: profile.provider,
              profileImage: profile.photos[0].value,
              email: profile.emails[0].value,
              firstName: profile.name.givenName,
              lastName: profile.name.familyName,
            }).then((dbUser) => {

              //send newly created user to serialize function
              done(null, dbUser);
            });
          } else {

            //return existing user to serialize function
            done(null, dbModel);
          }
        })
        .catch((err) => {
          done(err, null);
        });
    }
  )
);
