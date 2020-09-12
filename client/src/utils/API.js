import axios from "axios";

export default {
  googleLogin: () => window.location.replace("/api/auth/google"),
  facebookLogin: () => window.location.replace("/api/auth/facebook"),

  getUser: () => axios.post("/api/users/currentUser"),
  
  logoutUser: () => axios.post("/api/auth/logout"),
  // using post to retrieve all exercises from specified targets(array)
  getExerciseByTarget: (body) => axios.post("/api/exercises/", body),
  // create workouts based off selected exercises
  createWorkout: (body) => axios.post("/api/workouts/", body),
  // remove selected workout
  removeWorkout: (id) => axios.delete("/api/workouts/" + id),
  // get user's saved workouts
  getUserWorkouts: (id) => axios.get("/api/users/"),
};
