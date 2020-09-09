import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LastLocationProvider } from "react-router-last-location";
import BodyContext from "./utils/BodyContext";
import useBodyModel from "./utils/useBodyModel";
import Login from "./pages/Login";
import Main from "./pages/Main";
import ProtectedRoute from "./components/ProtectedRoute";
import Auth from "./components/Auth";

function App() {
  return (
    <BodyContext.Provider value={useBodyModel()}>
      <Auth>
        <Router>
          <LastLocationProvider>
            <Switch>
              <Route exact path="/" component={Login} />
              <ProtectedRoute path="/home" component={Main} />
              <Route path="*" component={() => "404 NOT FOUND"} />
            </Switch>
          </LastLocationProvider>
        </Router>
      </Auth>
    </BodyContext.Provider>
  );
}

export default App;
