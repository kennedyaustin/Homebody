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
        alternatives: ["Dumbbell chest fly", "Wide Push-ups"]
    },
    {
        exerciseName: "Dumbell Overhead press",
        exerciseInfo: "Choose an amount of weight with which you can safely perform 12-15 reps for 3-4 sets. If you don't have heavy enough weight do as many reps as you can with good form.",
        target: "push",
        alternatives: ["Pike Push-ups", "Wall Hand-stand Push-ups"]
    },
    {
        exerciseName: "Incline Push-ups",
        exerciseInfo: "Perform 3-4 sets of as many reps as you can with good form.",
        target: "push",
        alternatives: ["Chair Dips", "Dive Bomber Push-ups"]
    },
    {
        exerciseName: "Diamond Push-ups",
        exerciseInfo: "Perform 3-4 sets of as many reps as you can with good form.",
        target: "push",
        alternatives: ["Suspension Trainer Tricep Extensions", "Dumbbell Tricep Extensions"]
    },
    {
        exerciseName: "Wide Pull-ups",
        exerciseInfo: "Perform 3 sets of 8-12 reps. Use assistance band, step, or chair as needed.",
        target: "pull",
        alternatives: ["Suspension Trainer Underhand Rows", "Chin-ups"]
    },
    {
        exerciseName: "Suspension Trainer Rows",
        exerciseInfo: "Stand close enough to the suspension trainer anchor that you can only perform 8-12 reps and repeat for 3-4 sets",
        target: "pull",
        alternatives: ["Bent Over Dumbbell Rows", "Single Arm Dumbbell Rows(Lawn Mowers)"]
    },
    {
        exerciseName: "Close Grip Pull-ups",
        exerciseInfo: "Perform 3 sets of 8-12 reps. Use assistance band, step, or chair as needed.",
        target: "pull",
        alternatives: ["Chin-ups", "Underhand Suspension Trainer Rows"]
    },
    {
        exerciseName: "Suspension Trainer Face Pulls",
        exerciseInfo: "Stand close enough to the suspension trainer anchor that you can only perform 8-12 reps and repeat for 3-4 sets",
        target: "pull",
        alternatives: ["Dumbbell Bent Over Lateral Raises", "Prone Cobra"]
    },
    {
        exerciseName: "Standard Pull-ups",
        exerciseInfo: "Perform 3 sets of 8-12 reps. Use assistance band, step, or chair as needed.",
        target: "pull",
        alternatives: ["Suspension Trainer Underhand Rows", "Chin-ups"]
    },
    {
        exerciseName: "Suspension Trainer Wide Rows",
        exerciseInfo: "Stand close enough to the suspension trainer anchor that you can only perform 8-12 reps and repeat for 3-4 sets",
        target: "pull",
        alternatives: ["Dumbbell Back Flies", "Suspension Trainer Back Flies"]
    },
    {
        exerciseName: "Standard Bodyweight or Dumbbell Squats",
        exerciseInfo: "Perform 3-4 sets of 12-15 slow, controlled reps. Focus on descelerating the movement on the way down into the squat.",
        target: "legs",
        alternatives: ["Side Box Step-ups", "Chair or Crouch Squats(limited range of motion)"]
    },
    {
        exerciseName: "Bodyweight or Dumbbell alternating Step Back Lunges",
        exerciseInfo: "Perform 3-4 sets of 8-12 slow, controlled reps per leg.",
        target: "legs",
        alternatives: ["Lunge Dips", "Single Leg Box Step-ups"]
    },
    {
        exerciseName: "Wide Leg(sumo) Squat",
        exerciseInfo: "Perform 3-4 sets of 12-15 slow, controlled reps. Focus on descelerating the movement on the way down into the squat.",
        target: "legs",
        alternatives: ["Side Step Lunges", "Side Box Step-ups"]
    },
    {
        exerciseName: "Bodyweight or Dumbbell Walking Lunges",
        exerciseInfo: "Perform 3-4 sets of 16-24 total reps.",
        target: "legs",
        alternatives: ["Alternating Lunge Dips", "Alternating Box Step-ups"]
    },
    {
        exerciseName: "Toe Touch Squats",
        exerciseInfo: "Perform 3-4 sets of 12-15 reps.",
        target: "legs",
        alternatives: ["Good Mornings", "Dumbbell Deadlifts"]
    },
    {
        exerciseName: "Suspension Trainer Leg Curls",
        exerciseInfo: "Perform 3-4 sets of 8-12 reps",
        target: "legs",
        alternatives: ["Half Bridge with ALternating Leg Lifts", "Single Leg Hip Thrusts"]
    },
    {
        exerciseName: "Plank",
        exerciseInfo: "Hold the position for 30 seconds and repeat for 2-4 sets.",
        target: "core",
        alternatives: ["Plank on hands", "Stability Ball Plank"]
    },
    {
        exerciseName: "Bird-Dogs",
        exerciseInfo: "Focus on squeezing the core with each exhale. Alternate sides and perform 2-4 sets of 5-10 reps per side.",
        target: "core",
        alternatives: ["Side Plank", "Swimmers"]
    },
    {
        exerciseName: "Heel Taps",
        exerciseInfo: "Perform as many reps as you can for 3-4 sets.",
        target: "core",
        alternatives: ["Side Hip Raise", "V-Sit-ups"]
    },
    {
        exerciseName: "Bicycles",
        exerciseInfo: "Perform as many reps as you can for 3-4 sets.",
        target: "core",
        alternatives: ["Flutter Kicks", "V-sit"]
    },
    {
        exerciseName: "Leg Lifts with Pulse-up",
        exerciseInfo: "Perform 8-12 reps for 2-3 sets. Place hands under hips to decrease difficulty or hands behind head to make it harder.",
        target: "core",
        alternatives: ["Scissor Kicks", "Banana Pose"]
    },
    {
        exerciseName: "Half Bridge",
        exerciseInfo: "Hold the position for 30 seconds and repeat for 2-4 sets.",
        target: "core",
        alternatives: ["Superman Pose", "Prone Snow Angels"]
    }
];

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