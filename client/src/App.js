import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { LastLocationProvider } from "react-router-last-location";
import BodyContext from "./utils/BodyContext";
import useBodyModel from "./utils/useBodyModel";
import Login from "./pages/Login";
import Main from "./pages/Main";

function App() {
  return (
    <BodyContext.Provider value={useBodyModel()}>
      <Router>
        <LastLocationProvider>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={Main} />
          </Switch>
        </LastLocationProvider>
      </Router>
    </BodyContext.Provider>
  );
}

export default App;
