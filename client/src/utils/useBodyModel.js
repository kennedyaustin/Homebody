import { useState } from "react";

const useBodyModel = () => {
  const [authState, setAuth] = useState(null);

  const [userState, setUser] = useState({});

  const [targets, setTargets] = useState({
    options: [
      {
        name: "Push",
        selected: false,
      },
      {
        name: "Pull",
        selected: false,
      },
      {
        name: "Legs",
        selected: false,
      },
      {
        name: "Core",
        selected: false,
      },
    ],
  });

  const [workout, setWorkout] = useState([]);

  const [userWorkouts, setUserWorkouts] = useState([]);

  return {
    authState,
    setAuth,
    userState,
    setUser,
    targets,
    setTargets,
    workout,
    setWorkout,
    userWorkouts,
    setUserWorkouts
  };
};

export default useBodyModel;
