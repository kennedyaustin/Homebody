import React, { useState, useContext, useEffect } from "react";
import BodyContext from "../../utils/BodyContext";
import API from "../../utils/API";

const Profile = () => {
  const { userState } = useContext(BodyContext);
  const userId = userState._id;
  const [userWorkouts, setUserWorkouts] = useState();

  useEffect(() => {
    if (userId) {
      API.getUserWorkouts(userId).then((r) => {
        const savedWorkouts = r.data.savedWorkouts
        setUserWorkouts(savedWorkouts);
        console.log(userWorkouts)
      });
    }
  }, [userId]);

  return (
    <>
      <h1>Saved Workouts:</h1>
      {/* 
        userWorkouts.map(w => {
          <SavedWorkoutCard 
          date={}
          exercise={}
          description={}
          alternatives={}
          />
        })
      */}
    </>
  );
};

export default Profile;
