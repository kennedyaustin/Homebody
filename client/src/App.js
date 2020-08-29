import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./components/Auth";
import BodyContext from "./utils/BodyContext";
import useBodyModel from "./utils/useBodyModel";

function App() {
  return (
    <BodyContext.Provider value={useBodyModel()}>
      <Auth>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </Auth>
    </BodyContext.Provider>
  );
}

export default App;
