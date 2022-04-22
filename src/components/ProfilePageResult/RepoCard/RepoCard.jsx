import React, { useState } from "react";
import LoadMoreButton from "./LoadMoreButton";
import RepoInfo from "./RepoInfo";
import "./RepoCard.css";

function RepoCard(props) {
  const repoData = props.repoData;
  const userData = props.userData;

  const [showRepo, setShowRepo] = useState(2);

  return (
    <div className="repo-card">
      <p className="repo-card-title">Repositories</p>
      {repoData.slice(0, showRepo).map((eachRepo, index) => {
        return (
          <RepoInfo
            repoData={repoData}
            key={index}
            repoTitle={eachRepo.name}
            repoDescription={eachRepo.description}
            repoStars={eachRepo.stargazers_count}
            repoUrl={eachRepo.html_url}
          />
        );
      })}
      <LoadMoreButton
        showRepo={showRepo}
        setShowRepo={setShowRepo}
        userData={userData}
      />
    </div>
  );
}

export default RepoCard;
