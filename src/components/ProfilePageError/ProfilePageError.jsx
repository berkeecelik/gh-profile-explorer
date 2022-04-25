import React from "react";
import ProfilePageBase from "../ProfilePageBase/ProfilePageBase";
import "./ProfilePageError.css";

function ProfilePageError(props) {
  const error = props.error;

  return (
    <div className="error-container">
      <ProfilePageBase />

      <div className="error-message">{errorMessage()}</div>
    </div>
  );

  function errorMessage() {
    return error.response.status === 404
      ? "User not found. Please try again with another username."
      : error.response.status === 403
      ? "Couldn't load the user profle. Please try again later."
      : "Unknown Error.";
  }
}

export default ProfilePageError;
