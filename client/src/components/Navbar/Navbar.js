import React from 'react'
import BodyContext from "../../utils/BodyContext";
import Cookies from "js-cookie";
import './style.css'

const Navbar = () => {

    const logout = () => {
      Cookies.remove("user");
      BodyContext.setAuth(false);
    };

    return (

        <nav className="navbar navbar-custom navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="/">HomeBody</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
              <a className="nav-item nav-link" href="/profile">Saved Workouts</a>
              <a type="button" className="nav-item nav-link" href="/" onClick={logout}>Logout</a>
            </div>
          </div>
        </nav>

    )
    
};
  
export default Navbar;