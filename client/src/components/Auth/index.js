import React, { useContext } from "react";
import BodyContext from "../../utils/BodyContext";
import Login from "../../pages/Login";

const Auth = (props) => {
  const bodyContext = useContext(BodyContext);

  return <>{bodyContext.authState ? { ...props.children } : <Login />}</>;
};

export default Auth;
