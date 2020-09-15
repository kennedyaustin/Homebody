import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import BodyContext from "../../utils/BodyContext";

/* Checks if user is logged in.
Loads the Main component if user is logged in or the Login component if not. */

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const bodyContext = useContext(BodyContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (bodyContext.authState) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
