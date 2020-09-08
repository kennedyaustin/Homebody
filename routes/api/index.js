const router = require("express").Router();
const exerciseRoutes = require("./exercises");
const workoutRoutes = require("./workouts");
const userRoutes = require("./users");
const authRoutes = require("./auth");

// References routes
router.use("/exercises", exerciseRoutes);
router.use('/workouts', workoutRoutes)
router.use('/users', userRoutes)
router.use('/auth', authRoutes)

module.exports = router;
