import React, { useContext, useEffect } from "react";
import BodyContext from "../../utils/BodyContext";
import Login from "../../pages/Login";
import Cookies from "js-cookie";
import API from "../../utils/API";

const Auth = (props) => {
  const bodyContext = useContext(BodyContext);

  useEffect(() => {
    const userCookie = Cookies.get("user");
    console.log(bodyContext)

    if (userCookie) {
     
      API.getUser(userCookie)
      .then(resp => {
        bodyContext.setUser(resp.data)
        bodyContext.setAuth(true);
      })

    }
  }, []);

  return <>{bodyContext.authState ? props.children  : <Login />}</>;
};

export default Auth;
