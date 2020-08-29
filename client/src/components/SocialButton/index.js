import React, { Component } from "react";
import SocialLogin from "react-social-login";

class SocialButton extends Component {
  render() {
    return (
      <div className="text-center social-btn">
        <button className="btn" onClick={this.props.triggerLogin}>
          {this.props.children}
        </button>
      </div>
    );
  }
}

export default SocialLogin(SocialButton);
