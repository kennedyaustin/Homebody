import React, { useContext, useEffect } from "react";
import BodyContext from "../../utils/BodyContext";
import API from "../../utils/API";

const Auth = (props) => {
  const bodyContext = useContext(BodyContext);

  useEffect(() => {
    API.getUser().then((resp) => {
      if (resp.data) {
        bodyContext.setAuth(true);
        bodyContext.setUser(resp.data);
      } else {
        bodyContext.setAuth(false);
      }
    });
  }, []);

  if (bodyContext.authState === null) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return <>{props.children}</>;
};

export default Auth;
