//create express router
const router = require("express").Router();

//import route definitions
const exerciseRoutes = require("./exercises");
const workoutRoutes = require("./workouts");
const userRoutes = require("./users");
const authRoutes = require("./auth");

//use routes definitions
router.use("/exercises", exerciseRoutes);
router.use('/workouts', workoutRoutes)
router.use('/users', userRoutes)
router.use('/auth', authRoutes)

//export router
module.exports = router;
