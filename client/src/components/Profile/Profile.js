import React, { useContext } from "react";
import Cookies from "js-cookie";
import BodyContext from "../../utils/BodyContext";

const Profile = () => {

  const logout = () => {
    Cookies.remove("user");
    BodyContext.setAuth(false);
  };

  return (
    <>
      <h1>Saved Workouts:</h1>
      
      <button className="btn btn-primary" onClick={logout}>
        logout
      </button>
    </>
  );
};

export default Profile;
