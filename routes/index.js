const path = require("path");

//import API route definitions
const apiRoutes = require("./api");

//define express router
const router = require("express").Router();

// use API route definitions
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

//export router
module.exports = router;