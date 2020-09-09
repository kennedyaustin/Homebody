import React, { useContext } from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import Home from "../components/Home/Home";
import Profile from "../components/Profile/Profile";
import Navbar from "../components/Navbar/Navbar.js";
import BodyContext from "../utils/BodyContext";
import WorkoutCard from "../components/WorkoutCard/WorkoutCard";

function Main() {
  const bodyContext = useContext(BodyContext);

  if (!bodyContext.authState) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/home/profile" component={Profile} />
        <Route exact path="/home/workout" component={WorkoutCard} />
        <Route exact path="/home" component={Home} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </>
  );
}

export default Main;
