import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "../components/Home/Home";
import Profile from "../components/Profile/Profile";
import Navbar from "../components/Navbar/Navbar.js";
import BodyContext from "../utils/BodyContext";

function Main() {
  const bodyContext = useContext(BodyContext);

  if (!bodyContext.authState) {
    return <Redirect to="/login" />;
  }

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default Main;
