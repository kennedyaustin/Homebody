import { useState } from "react";

const useBodyModel = () => {
  const [authState, setAuth] = useState(false);

  const [userState, setUser] = useState({})

  return { authState, setAuth, userState, setUser };
};

export default useBodyModel;
