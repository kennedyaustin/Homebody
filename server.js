//npm package imports
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieSession = require("cookie-session");

//import API routes
const routes = require("./routes");

//import passport setup file
require("./passport/setup");

//define server PORT
const PORT = process.env.PORT || 3001;

//create express app
const app = express();

//include express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets if on production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//cookie session middleware
app.use(
  cookieSession({
    maxAge: 7 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  })
);

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

//use API routes
app.use(routes);

//connect to MongoDB database
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/homeBodyFitness",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

//start up server
app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});