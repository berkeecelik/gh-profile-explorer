import React from "react";
import UserHeader from "./UserHeader";
import UserInfo from "./UserInfo";
import "./DataCard.css";

function DataCard(props) {
  const userData = props.userData;

  return (
    <div className="data-card">
      <a
        className="user-url"
        target="_blank"
        rel="noopener noreferrer"
        href={userData.html_url}
      >
        <span className="url-text">View on Github</span> &#128279;
      </a>

      <UserHeader userData={userData} />

      <UserInfo userData={userData} />
    </div>
  );
}

export default DataCard;
