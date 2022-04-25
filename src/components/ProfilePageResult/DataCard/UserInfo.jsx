import React from "react";
import NumFormatter from "./NumFormatter";
import "./UserInfo.css";

function UserInfo(props) {
  const data = props.userData;

  return (
    <div className="user-info">
      <div className="info-box">
        <div className="info-count">{data.public_repos}</div>

        <span className="info-name">Repositories</span>
      </div>

      <div className="info-box">
        <div className="info-count">
          <NumFormatter userData={data.following} />
        </div>

        <span className="info-name">Following</span>
      </div>

      <div className="info-box">
        <div className="info-count">
          <NumFormatter userData={data.followers} />
        </div>

        <span className="info-name">Followers</span>
      </div>
    </div>
  );
}

export default UserInfo;
