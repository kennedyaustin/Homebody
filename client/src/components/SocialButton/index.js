import React, { Component } from "react";
import SocialLogin from "react-social-login";

class SocialButton extends Component {
  render() {
    return (
      <button onClick={this.props.triggerLogin}>{this.props.children}</button>
    );
  }
}

export default SocialLogin(SocialButton);
