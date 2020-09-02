import React, { useContext } from "react";
import Cookies from "js-cookie";
import BodyContext from "../../utils/BodyContext";

const Profile = () => {
  const bodyContext = useContext(BodyContext);

  const logout = () => {
    Cookies.remove("user");
    bodyContext.setAuth(false);
  };

  return (
    <>
      <button className="btn btn-primary" onClick={logout}>
        logout
      </button>
    </>
  );
};

export default Profile;
