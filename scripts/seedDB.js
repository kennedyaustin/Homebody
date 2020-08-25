const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/homeBodyFitness"
);

const exerciseSeed = [
    {

    }
]

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