import React, { useContext, useEffect } from "react";
import SocialButton from "../components/SocialButton";
import BodyContext from "../utils/BodyContext";
import Cookies from "js-cookie";
import API from "../utils/API";
import "./Login.css";
import { Redirect } from "react-router-dom";

const Login = ({ history }) => {
  const bodyContext = useContext(BodyContext);

  useEffect(() => {
    const userCookie = Cookies.get("user");

    if (userCookie) {
      bodyContext.setAuth(true);
      API.getUser(userCookie).then((resp) => {
        bodyContext.setUser(resp.data);
      });
    }
  }, []);

  const handleSocialLogin = (data) => {
    API.loginUser(data._profile)
      .then((resp) => {
        console.log(resp);
        bodyContext.setUser(resp.data);
        bodyContext.setAuth(true);
        Cookies.set("user", resp.data.email, { expires: 7 });
        history.push("/home");
      })
      .catch((err) => {
        console.log("login failed");
      });
  };

  const handleSocialLoginFailure = (data) => {
    console.log(data);
  };

  if (bodyContext.authState) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="container">
      <h1 className="text-center textColor mt-4 mb-5">HomeBody</h1>
      <div className="row justify-content-center">
        <img
          src="/house-light.png"
          className="logoHouseLogin"
          alt=""
          style={{ marginTop: "200px" }}
        ></img>
        <img
          style={{ marginTop: "200px" }}
          src="/muscle1-light.png"
          className="bicepLeftLogin "
          alt=""
        ></img>
        <img
          style={{ marginTop: "200px" }}
          src="/muscle2-light.png"
          className="bicepRightLogin "
          alt=""
        ></img>
      </div>
      <div className="loginForm card bg-light" style={{ maxWidth: "18rem" }}>
        <h3 className="text-center card-header">Sign In</h3>
        <div className="card-body my-3">
          <SocialButton
            provider="google"
            appId="655422208019-cq9d7c5d7rrjpuh0ucqjfd6cu3rp7e74.apps.googleusercontent.com"
            onLoginSuccess={handleSocialLogin}
            onLoginFailure={handleSocialLoginFailure}
          >
            <div className="googleLogin">
              <img
                src="btn_google_light_normal_ios.svg"
                style={{ height: "30px", marginRight: "24px" }}
              />
              Sign in with Google
            </div>
          </SocialButton>
          <SocialButton
            provider="facebook"
            appId="321586675951521"
            onLoginSuccess={handleSocialLogin}
            onLoginFailure={handleSocialLoginFailure}
          >
            <div className="facebookLogin">
              <i
                className="fab fa-facebook"
                style={{ marginRight: "20px", fontSize: "19px" }}
              />
              Sign in with Facebook
            </div>
          </SocialButton>
          {/* <SocialButton
          provider='github'
          gatekeeper='https://gatekeeperreact.herokuapp.com'
          appId='399ced5028cbcdf3a73e'
          redirect='http://localhost:3000'
          onLoginSuccess={handleSocialLogin}
          onLoginFailure={handleSocialLoginFailure}
          >
        <i className="fa fa-github"></i> Sign in with <b>Github</b>
        </SocialButton> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
