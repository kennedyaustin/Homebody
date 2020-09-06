import axios from 'axios'

export default {

   
    loginUser: body => 
        axios.post('/api/users', body)
    ,

    getUser: email => 
        axios.post('api/users/login', {email})
    ,

    // using post to retrieve all exercises from specified targets(array)
    getExerciseByTarget: body => 
        axios.post('/api/exercises/', body)
    ,

    
    // create workouts based off selected exercises
    createWorkout: body => 
        axios.post("/api/workouts/", body)
    ,


    // remove selected workout
    removeWorkout: body => 
        axios.post("/api/workouts/", body)
    

}