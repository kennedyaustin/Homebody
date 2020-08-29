import React, { useContext } from "react";
import SocialButton from "../components/SocialButton";
import BodyContext from "../utils/BodyContext";
import Cookies from "js-cookie";

const Login = () => {
  const bodyContext = useContext(BodyContext);

  const handleSocialLogin = (data) => {
    bodyContext.setAuth(true);
    Cookies.set("user", "login", 7);
  };

  const handleSocialLoginFailure = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h2 className="text-center">Sign In</h2>
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
      <SocialButton
        provider="linkedin"
        appId="86oio7ttw5isqb"
        onLoginSuccess={handleSocialLogin}
        onLoginFailure={handleSocialLoginFailure}
      >
        <i className="fa fa-linkedin"></i> Sign in with <b>LinkedIn</b>
      </SocialButton>
    </div>
  );
};

export default Login;
