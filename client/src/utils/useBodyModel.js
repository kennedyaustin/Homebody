import { useState } from "react";

const useBodyModel = () => {
  const [authState, setAuth] = useState(false);

  const [userState, setUser] = useState({})

  const [targets, setTargets] = useState([
    {
      name: 'Push',
      selected: false
    },
    {
      name: 'Pull',
      selected: false
    },
    {
      name: 'Legs',
      selected: false
    },
    {
      name: 'Core',
      selected: false
    }
  ])

  return { authState, setAuth, userState, setUser, targets, setTargets };
};

export default useBodyModel;
