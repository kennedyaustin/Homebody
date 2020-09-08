import axios from 'axios'

export default {

   
    loginUser: () => 
        axios.get('/api/auth/google')
    ,

    getUser: email => 
        axios.post('/api/users/login', {email})
    ,

    // using post to retrieve all exercises from specified targets(array)
    getExerciseByTarget: body => 
        axios.post('/api/exercises/', body)
    ,

    
    // create workouts based off selected exercises
    createWorkout: (id, body) => 
        axios.post("/api/workouts/" + id, body)
    ,

    // remove selected workout
    removeWorkout: body => 
        axios.post("/api/workouts/", body)
    ,
    
    getUserWorkouts: id => 
        axios.get("/api/users/" + id)

}