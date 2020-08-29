import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./components/Auth";
import BodyContext from "./utils/BodyContext";
import useBodyModel from "./utils/useBodyModel";
import Profile from "./pages/Profile"
import Navbar from './components/Navbar/Navbar.js'

function App() {
  return (
    <BodyContext.Provider value={useBodyModel()}>
      <Auth>
          <Navbar />
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/profile" component={Profile} />
            </Switch>
          </Router>
      </Auth>
    </BodyContext.Provider>
  );
}

export default App;
