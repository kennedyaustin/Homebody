import React, { useContext, useEffect } from "react";
import BodyContext from "../../utils/BodyContext";
import Login from "../../pages/Login";
import Cookies from "js-cookie";

const Auth = (props) => {
  const bodyContext = useContext(BodyContext);

  useEffect(() => {
    const userCookie = Cookies.get("user");

    if (userCookie) {
      bodyContext.setAuth(true);
    }
  }, []);

  return <>{bodyContext.authState ? { ...props.children } : <Login />}</>;
};

export default Auth;
