const router = require("express").Router();
const exerciseRoutes = require("./exercises");
const workoutRoutes = require("./workouts");
const userRoutes = require("./users");

// References routes
router.use("/exercises", exerciseRoutes);
router.use('/workouts', workoutRoutes)
router.use('/users', userRoutes)

module.exports = router;
