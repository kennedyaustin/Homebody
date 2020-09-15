import React, { useContext, useEffect } from "react";
import BodyContext from "../../utils/BodyContext";
import API from "../../utils/API";
import SavedWorkoutCard from "../SavedWorkoutCard/SavedWorkoutCard";

/* The Profile component calls the getUserWorkouts API function upon loading.
The results of the API call are saved as in the userWorkouts global hook.
the userWorkouts hook is then mapped over to populate the page with data from the API call. */

const Profile = () => {
  const { userState, userWorkouts, setUserWorkouts } = useContext(BodyContext);
  const userId = userState._id;

  useEffect(() => {
    API.getUserWorkouts()
    .then((r) => {
      setUserWorkouts(r.data.savedWorkouts);
    })
    .catch(err => console.log(err))
  }, []);

  return (
    <div className="container-fluid page">
      <div className="row d-flex justify-content-center mt-4">
        { userWorkouts === null ? (<div className="d-flex justify-content-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>): (userWorkouts.length ? (
          userWorkouts.map((w) => {
            return (
              <SavedWorkoutCard
                key={w._id}
                id={w._id}
                date={w.created}
                exercises={w.workout}
              />
            );
          })
        ) : (
          <>
            <div className="container mt-4">
              <h3 className="text-center text-light">
                You have no saved workouts. Go back to the{" "}
                <a href="/home">home page</a> to create one!
              </h3>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Profile;
