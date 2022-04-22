import React from "react";
import "./ProfilePageBase.css";

function ProfilePageBase() {
  return (
    <div className="profile-base">
      <div className="rectangle-big">
        <div className="circle skeleton"></div>
        <div className="data-line-medium skeleton"></div>
        <div className="data-line-mini skeleton"></div>
      </div>
      <div className="repo-line-midi skeleton"></div>
      <div className="rectangle-small">
        <div className="repo-line-medium skeleton"></div>
        <div className="repo-line-big skeleton"></div>
      </div>
      <div className="rectangle-small">
        <div className="repo-line-medium skeleton"></div>
        <div className="repo-line-big skeleton"></div>
      </div>
    </div>
  );
}

export default ProfilePageBase;
