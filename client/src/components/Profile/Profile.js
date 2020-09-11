import React, { useState, useContext, useEffect } from "react";
import BodyContext from "../../utils/BodyContext";
import API from "../../utils/API";
import SavedWorkoutCard from "../SavedWorkoutCard/SavedWorkoutCard";

const Profile = () => {
  const { userState } = useContext(BodyContext);
  const userId = userState._id;
  const [userWorkouts, setUserWorkouts] = useState([]);

  useEffect(() => {
    if (userId) {
      API.getUserWorkouts(userId).then((r) => {
        const savedWorkouts = r.data.savedWorkouts
        setUserWorkouts(savedWorkouts);

      });
    }
  }, [userId]);
  console.log("userWorkouts hook: ", userWorkouts)

  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center mt-4">
        {userWorkouts.length ?
          userWorkouts.map(w => {
            return (<SavedWorkoutCard
              key={w._id}
              id={w._id}
              date={w.created}
              exercises={w.workout}
            />)
          })
          : <h1 className="text-center text-muted">You have no saved workouts. Go back to the home page to create one!</h1>
        }
      </div>
    </div>
  );
};

export default Profile;
