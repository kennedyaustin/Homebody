const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/homeBodyFitness"
);

const exerciseSeed = [
    {
        exerciseName: "Standard Push-ups",
        exerciseInfo: "Perform 3-4 sets of as many reps as you can with good form.",
        target: "push",
        alternatives: ["Knee Push-ups", "Wall Push-ups"]
    },
    {
        exerciseName: "Decline Push-ups",
        exerciseInfo: "Perform 3-4 sets of as many reps as you can with good form.",
        target: "push",
        alternatives: ["Stability Ball Push-ups", "Decline Push-ups"]
    },
    {
        exerciseName: "Suspension Trainer Chest Press",
        exerciseInfo: "Stand close enough to the suspension trainer's anchor that you can only perform 12-15 reps. Repeat for 3 sets.",
        target: "push",
        alternatives: ["Dumbbell chest fly, "]
    },
    {
        exerciseName: "Dumbell Overhead press",
        exerciseInfo: "Choose an amount of weight with which you can safely perform 12-15 reps for 3-4 sets. If you don't have heavy enough weight do as many reps as you can with good form.",
        target: "push",
        alternatives: ["Pike Push-ups"]
    },
    {
        exerciseName: "",
        exerciseInfo: "",
        target: "push",
        alternatives: []
    },
    {
        exerciseName: "",
        exerciseInfo: "",
        target: "push",
        alternatives: []
    },
    {
        exerciseName: "",
        exerciseInfo: "",
        target: "pull",
        alternatives: []
    },
    {
        exerciseName: "",
        exerciseInfo: "",
        target: "pull",
        alternatives: []
    },
    {
        exerciseName: "",
        exerciseInfo: "",
        target: "pull",
        alternatives: []
    },
    {
        exerciseName: "",
        exerciseInfo: "",
        target: "pull",
        alternatives: []
    },
    {
        exerciseName: "",
        exerciseInfo: "",
        target: "pull",
        alternatives: []
    },
    {
        exerciseName: "",
        exerciseInfo: "",
        target: "pull",
        alternatives: []
    },
    {
        exerciseName: "",
        exerciseInfo: "",
        target: "legs",
        alternatives: []
    },
    {
        exerciseName: "",
        exerciseInfo: "",
        target: "legs",
        alternatives: []
    },
    {
        exerciseName: "",
        exerciseInfo: "",
        target: "legs",
        alternatives: []
    },
    {
        exerciseName: "",
        exerciseInfo: "",
        target: "legs",
        alternatives: []
    },
    {
        exerciseName: "",
        exerciseInfo: "",
        target: "legs",
        alternatives: []
    },
    {
        exerciseName: "",
        exerciseInfo: "",
        target: "legs",
        alternatives: []
    },
    {
        exerciseName: "",
        exerciseInfo: "",
        target: "core",
        alternatives: []
    },
    {
        exerciseName: "",
        exerciseInfo: "",
        target: "core",
        alternatives: []
    },
    {
        exerciseName: "",
        exerciseInfo: "",
        target: "core",
        alternatives: []
    },
    {
        exerciseName: "",
        exerciseInfo: "",
        target: "core",
        alternatives: []
    },
    {
        exerciseName: "",
        exerciseInfo: "",
        target: "core",
        alternatives: []
    },
    {
        exerciseName: "",
        exerciseInfo: "",
        target: "core",
        alternatives: []
    },
]

//exerciseName
//excersiseInfo
//target
//alternatives

db.Exercises
.remove({})
.then(() => db.Exercises.collection.insertMany(exerciseSeed))
.then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});