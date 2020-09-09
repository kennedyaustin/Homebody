const User = require("../models/users");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const db = require("../models");
require("dotenv").config();

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
      proxy: true,
    },
    (accessToken, refreshToken, profile, cb) => {
      db.Users.findOne({ provider: profile.provider, providerId: profile.id })
        .then((dbModel) => {
          if (!dbModel) {
            db.Users.create({
              providerId: profile.id,
              provider: profile.provider,
              profileImage: profile.photos[0].value,
              email: profile.emails[0].value,
              firstName: profile.name.givenName,
              lastName: profile.name.familyName,
            })
              .then((dbUser) => {
                cb(null, dbUser);
              })
              .catch((err) => {
                cb(err, null);
              });
          } else {
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
      callbackURL: "/api/auth/facebook/callback",
      profileFields: ["id", "displayName", "photos", "email", "name"],
      auth_type: "reauthenticate",
      proxy: true,
    },
    (accessToken, refreshToken, profile, done) => {
      db.Users.findOne({ provider: profile.provider, providerId: profile.id })
        .then((dbModel) => {
          if (!dbModel) {
            db.Users.create({
              providerId: profile.id,
              provider: profile.provider,
              profileImage: profile.photos[0].value,
              email: profile.emails[0].value,
              firstName: profile.name.givenName,
              lastName: profile.name.familyName,
            }).then((dbUser) => {
              done(null, dbUser);
            });
          } else {
            done(null, dbModel);
          }
        })
        .catch((err) => {
          done(err, null);
        });
    }
  )
);
