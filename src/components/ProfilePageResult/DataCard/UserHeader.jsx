import React from "react";
import "./UserHeader.css";

function UserHeader(props) {
  const data = props.userData;

  return (
    <div className="user-header">
      <img className="user-avatar" src={data.avatar_url} alt="avatar" />

      <div className="user-title">
        <div className="user-name">{data.name ? data.name : data.login}</div>

        <span className="user-login">@{data.login}</span>
      </div>
    </div>
  );
}

export default UserHeader;
