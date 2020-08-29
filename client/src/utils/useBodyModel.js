import { useState } from "react";

const useBodyModel = () => {
  const [authState, setAuth] = useState(false);

  return { authState, setAuth };
};

export default useBodyModel;
