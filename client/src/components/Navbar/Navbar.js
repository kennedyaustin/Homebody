import React, { useContext } from "react";
import BodyContext from "../../utils/BodyContext";
import Cookies from "js-cookie";
import "./style.css";
import { Link, useHistory } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'

const Navbarhome = () => {
  const { userState, setAuth } = useContext(BodyContext);
  const userName = userState.firstName ? userState.firstName : "Name";
  const profileImage = userState.profileImage ? userState.profileImage : "https://via.placeholder.com/96x96";
  const history = useHistory();

  const logout = () => {
    Cookies.remove("user");
    setAuth(false);
    history.push("/login");
  };

  return (
    <Navbar className= "navbar navbar-custom navbar-dark" expand="lg">
      <Navbar.Brand href="/">
      <div>
        <img src="/house-light.png" className="logoHouse" alt=""></img>
        <img src="/muscle1-light.png" className="bicepLeft" alt=""></img>
        <img src="/muscle2-light.png" className="bicepRight" alt=""></img>
      </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <div className="navbar-nav">
            <Link className="navbar-brand mt-1 mr-2" to="/profile">
              <img className="profilePic" src={profileImage} alt=""></img>
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
            <a type="button" href="" className="nav-item nav-link pt-4" onClick={logout}>
              Logout
            </a>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbarhome;