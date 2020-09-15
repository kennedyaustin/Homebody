import React, { useContext } from "react";
import BodyContext from "../../utils/BodyContext";
import "./style.css";
import { Link, useHistory } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import API from "../../utils/API";

/* Navbarhome displays the HomeBody logo and links to each page.
Only displays after user is logged in. */

const NavbarHome = () => {
  const { userState, setAuth } = useContext(BodyContext);
  const userName = userState.firstName ? userState.firstName : "Name";
  const profileImage = userState.profileImage
    ? userState.profileImage
    : "https://via.placeholder.com/96x96";
  const history = useHistory();

  const logout = () => {
    API.logoutUser()
    .then((resp) => {
      setAuth(false);
      history.push("/");
    })
    .catch(err => console.log(err))
  };

  return (
    <Navbar className="navbar navbar-custom navbar-dark" expand="lg">
      <Link to="/home">
        <Navbar.Brand>
          <div className= "Moves">
            <img src="/house-light.png" className="logoHouse" alt=""></img>
            <img src="/muscle1-light.png" className="bicepLeft" alt=""></img>
            <img src="/muscle2-light.png" className="bicepRight" alt=""></img>
            <span className="ml-4 h2 d-none d-md-inline navLogoText">Homebody Fitness</span>
          </div>
        </Navbar.Brand>
      </Link>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <div className="navbar-nav">
            <span
              className="pt-4 mr-4 nameColor"
            >
              Hello, <span><strong className="text-light">{userName}</strong></span> !
            </span>
            <Link className="navbar-brand mt-1 mr-4" to="/home/profile">
              <img className="profilePic" src={profileImage} alt=""></img>
            </Link>
            
            <Link className="nav-item nav-link pt-4 nameColor" to="/home">
              Home <span className="sr-only">(current)</span>
            </Link>
            <Link className="nav-item nav-link pt-4" to="/home/profile">
              Saved Workouts
            </Link>
            <a
              href="#"
              type="button"
              className="nav-item nav-link pt-4"
              onClick={logout}
            >
              Logout
            </a>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarHome;
