import React from "react";
import DataCard from "./DataCard/DataCard";
import RepoCard from "./RepoCard/RepoCard";

function ProfilePageResult(props) {
  const userData = props.userData;
  const repoData = props.repoData;

  return (
    <div className="profile-result">
      <DataCard userData={userData} />
      <RepoCard userData={userData} repoData={repoData} />
    </div>
  );
}

export default ProfilePageResult;
