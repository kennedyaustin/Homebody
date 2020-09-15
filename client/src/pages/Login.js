import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useLastLocation } from "react-router-last-location";
import SocialButton from "../components/buttons/SocialButton";
import BodyContext from "../utils/BodyContext";
import "./Login.css";
import API from "../utils/API";

/* Upon loading the getUser API function is called. If user data exists the Main page is loaded. */

const Login = () => {
  const bodyContext = useContext(BodyContext);
  const lastLocation = useLastLocation();

  //if user is logged in, redirect to home page
  if (bodyContext.authState) {
    return <Redirect to={lastLocation ? lastLocation : "/home"} />;
  }

  return (
    <>
      <div className="container d-flex flex-column justify-content-center">
        <div className="row col-10 offset-1 d-flex flex-row justify-content-center mr-2">
          <img
            src="/muscle2-light.png"
            className="bicepRightLogin"
            alt="logo"
          />
          <img src="/house-light.png" className="logoHouseLogin" alt="logo" />
          <img src="/muscle1-light.png" className="bicepLeftLogin" alt="logo" />

          <h1 className="text-center textColor m-4">HomeBody</h1>
        </div>
        <div className="loginForm card bg-light" style={{ maxWidth: "18rem" }}>
          <h3 className="text-center card-header">Sign In</h3>
          <div className="card-body my-3">
            <SocialButton provider="google">
              <div className="googleLogin">
                <img
                  src="btn_google_light_normal_ios.svg"
                  style={{ height: "30px", marginRight: "24px" }}
                  alt="Google Button"
                />
                Sign in with Google
              </div>
            </SocialButton>

            <SocialButton provider="facebook">
              <div className="facebookLogin">
                <i
                  className="fab fa-facebook"
                  style={{ marginRight: "20px", fontSize: "19px" }}
                />
                Sign in with Facebook
              </div>
            </SocialButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
