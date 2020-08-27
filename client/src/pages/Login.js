import React, { useContext } from "react";
import SocialButton from "../components/SocialButton";
import BodyContext from "../utils/BodyContext";

const Login = () => {
  const bodyContext = useContext(BodyContext);
  const handleSocialLogin = () => {
    bodyContext.setAuth(true);
  };

  const handleSocialLoginFailure = () => {
    console.log("failure");
  };
  return (
    <div>
      <SocialButton
        provider="google"
        appId="655422208019-cq9d7c5d7rrjpuh0ucqjfd6cu3rp7e74.apps.googleusercontent.com"
        onLoginSuccess={handleSocialLogin}
        onLoginFailure={handleSocialLoginFailure}
      >
        Login with Google
      </SocialButton>
      <SocialButton
        provider="facebook"
        appId="321586675951521"
        onLoginSuccess={handleSocialLogin}
        onLoginFailure={handleSocialLoginFailure}
      >
        Login with Facebook
      </SocialButton>
    </div>
  );
};

export default Login;
