import axios from 'axios'

export default {

   
    loginUser: function(body) {
        return axios.post('/api/users', body)
    },

    getUser: function(email) {
        return axios.post('api/users/login', {email})
    },

    // using post to retrieve all exercises from specified targets(array)
    getExerciseByTarget: function(body) {

        return axios.post('/api/exercises/', body)
    },

    
    // create workouts based off selected exercises
    createWorkout: function(body) {

        return axios.post("/api/workouts/", body)
    },


    // remove selected workout
    removeWorkout: function(body) {

        return axios.post("/api/workouts/", body)
    }

}