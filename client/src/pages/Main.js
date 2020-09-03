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
import WorkoutCard from "../components/WorkoutCard/WorkoutCard";

function Main() {
  const bodyContext = useContext(BodyContext);

  if (!bodyContext.authState) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/workout" component={WorkoutCard} />
        <Route component={Home} />
      </Switch>
    </>
  );
}

export default Main;
