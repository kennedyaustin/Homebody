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
    <>
      <Navbar />
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route component={Home} />
      </Switch>
    </>
  );
}

export default Main;
