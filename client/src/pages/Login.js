import React, { useContext } from "react";
import SocialButton from "../components/SocialButton";
import BodyContext from "../utils/BodyContext";
import Cookies from "js-cookie";
import API from "../utils/API";
import "./Login.css";

const Login = () => {
  const bodyContext = useContext(BodyContext);

  const handleSocialLogin = (data) => {
    API.loginUser(data._profile)
      .then((resp) => {
        console.log(resp);
        bodyContext.setUser(resp.data);
        bodyContext.setAuth(true);
        Cookies.set("user", resp.data.email, { expires: 7 });
      })
      .catch((err) => {
        console.log("login failed");
      });
  };

  const handleSocialLoginFailure = (data) => {
    console.log(data);
  };
  return (
    <div className="container">
        <h1 className="text-center textColor">HomeBody</h1>
      <div className="row justify-content-center">
        <img src="/house-light.png" className="logoHouseLogin mt-3" alt=""></img>
        <img src="/muscle1-light.png" className="bicepLeftLogin mt-3" alt=""></img>
        <img src="/muscle2-light.png" className="bicepRightLogin mt-3" alt=""></img>
      </div>
      <div
        className="offset-md-3 col-md-6 offset-md-3 mt-3"
        style={{ border: "1px solid white" }}
      >
        <h2 className="text-center" style={{ color: "white" }}>
          Sign In
        </h2>
        <SocialButton
          provider="google"
          appId="655422208019-cq9d7c5d7rrjpuh0ucqjfd6cu3rp7e74.apps.googleusercontent.com"
          onLoginSuccess={handleSocialLogin}
          onLoginFailure={handleSocialLoginFailure}
        >
          <i className="fa fa-google"></i> Sign in with <b>Google</b>
        </SocialButton>
        <SocialButton
          provider="facebook"
          appId="321586675951521"
          onLoginSuccess={handleSocialLogin}
          onLoginFailure={handleSocialLoginFailure}
        >
          <i className="fa fa-facebook"></i> Sign in with <b>Facebook</b>
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
  );
};

export default Login;
