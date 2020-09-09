const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const cookieSession = require("cookie-session");
const passport = require("passport");
require("./passport/setup");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
}

app.use(
  cookieSession({
    maxAge: 7 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/homeBodyFitness",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
