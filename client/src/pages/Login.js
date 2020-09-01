import React, { useContext } from "react";
import SocialButton from "../components/SocialButton";
import BodyContext from "../utils/BodyContext";
import Cookies from "js-cookie";
import API from '../utils/API'

const Login = () => {
  const bodyContext = useContext(BodyContext);

  const handleSocialLogin = (data) => {

    API.loginUser(data._profile).then((resp) => {
      console.log(resp)
      bodyContext.setUser(resp.data)
      bodyContext.setAuth(true);
      Cookies.set("user", resp.data.email, {expires: 7});
    }).catch(err => {
      console.log("login failed")
    })
    
  };

  const handleSocialLoginFailure = (data) => {
    console.log(data);
  };
  return (
    <div className= 'container'>
      <div className= 'offset-md-3 col-md-6 offset-md-3' style= {{border: '1px solid white'}}>
        <h2 className="text-center" style={{color: 'white'}}>Sign In</h2>
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
    </div>
  );
};

export default Login;
