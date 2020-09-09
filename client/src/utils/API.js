import axios from "axios";

export default {
  googleLogin: () => axios.get("/api/auth/google"),
  facebookLogin: () => axios.get("/api/auth/facebook"),

  getUser: () => axios.post("/api/users/currentUser"),
  logoutUser: () => axios.post("/api/auth/logout"),
  // using post to retrieve all exercises from specified targets(array)
  getExerciseByTarget: (body) => axios.post("/api/exercises/", body),
  // create workouts based off selected exercises
  createWorkout: (id, body) => axios.post("/api/workouts/" + id, body),
  // remove selected workout
  removeWorkout: (body) => axios.post("/api/workouts/", body),
  getUserWorkouts: (id) => axios.get("/api/users/" + id),
};
