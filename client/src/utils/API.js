import axios from 'axios'

export default {


    getExerciseByTarget: function(body) {

        //return axios.get("/api/exercises/" + target + "/" + num)
        return axios.post('/api/exercises/', body)
    },

    createWorkout: function(body) {

        return axios.post("/api/workouts/", body)
    }
}