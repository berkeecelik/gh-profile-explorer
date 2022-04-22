import React from "react";
import UserHeader from "./UserHeader";
import UserInfo from "./UserInfo";

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
        View on Github
      </a>
      <UserHeader userData={userData} />
      <UserInfo userData={userData} />
    </div>
  );
}

export default DataCard;
