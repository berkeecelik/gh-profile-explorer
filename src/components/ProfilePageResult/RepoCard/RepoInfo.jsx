import React from "react";
import "./RepoInfo.css";

function RepoInfo(props) {
  const repoTitle = props.repoTitle;
  const repoDescription = props.repoDescription;
  const repoStars = props.repoStars;
  const repoUrl = props.repoUrl;

  return (
    <a
      className="repo-link"
      target="_blank"
      rel="noopener noreferrer"
      href={repoUrl}
    >
      <div className="repo-container">
        <div className="repo-info">
          <div className="repo-title">{repoTitle}</div>
          <div className="repo-text">
            {repoDescription ? repoDescription : "No description available."}
          </div>
        </div>
        <div className="repo-star">
          <div className="star-count">{repoStars}</div>
          <div className="star-text">Stars</div>
        </div>
      </div>
    </a>
  );
}

export default RepoInfo;
