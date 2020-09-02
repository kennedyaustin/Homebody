import React, { useContext } from "react";
import BodyContext from "../../utils/BodyContext";
import Cookies from "js-cookie";
import "./style.css";
import { Link, useHistory } from "react-router-dom";

const Navbar = () => {
  const { userState, setAuth } = useContext(BodyContext);
  const userName = userState.firstName ? userState.firstName : "";
  const profileImage = userState.profileImage ? userState.profileImage : "";
  const history = useHistory();

  const logout = () => {
    Cookies.remove("user");
    setAuth(false);
    history.push("/login");
  };

  return (
    <nav className="navbar navbar-custom navbar-expand-lg navbar-dark">
      <div>
        <img src="/house-light.png" className="logoHouse" alt=""></img>
        <img src="/muscle1-light.png" className="bicepLeft" alt=""></img>
        <img src="/muscle2-light.png" className="bicepRight" alt=""></img>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <Link className="navbar-brand mt-1 mr-2" to="/profile">
            <img className="profilePic" src={profileImage}></img>
          </Link>
          <Link className="nav-item nav-link pt-4 pr-2 nameColor" to="/profile">
            {userName}
          </Link>
          <Link className="nav-item nav-link pt-4 nameColor" to="/home">
            Home <span className="sr-only">(current)</span>
          </Link>
          <Link className="nav-item nav-link pt-4" to="/profile">
            Saved Workouts
          </Link>
          <a type="button" className="nav-item nav-link pt-4" onClick={logout}>
            Logout
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
