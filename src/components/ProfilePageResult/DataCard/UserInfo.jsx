import React from "react";

function UserInfo(props) {
  const data = props.userData;

  return (
    <div className="user-info">
      <div className="repo-info">
        <div className="info-count">{data.public_repos}</div>
        <span className="info-name">Repositories</span>
      </div>
      <div className="following-info">
        <div className="info-count">{data.following}</div>
        <span className="info-name">Following</span>
      </div>
      <div className="follower-info">
        <div className="info-count">{data.followers}</div>
        <span className="info-name">Followers</span>
      </div>
    </div>
  );
}

export default UserInfo;
