import React from "react";

function RepoInfo(props) {
  const repoTitle = props.repoTitle;
  const repoDescription = props.repoDescription;
  const repoStars = props.repoStars;

  return (
    <div className="repo-container">
      <div className="repo-info">
        <div className="repo-title">{repoTitle}</div>
        <div className="repo-text">{repoDescription}</div>
      </div>
      <div className="repo-star">
        <div className="star-count">{repoStars}</div>
        <div className="repo-text">Stars</div>
      </div>
    </div>
  );
}

export default RepoInfo;
