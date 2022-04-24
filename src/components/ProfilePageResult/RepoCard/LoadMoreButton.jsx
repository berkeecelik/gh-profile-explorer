import React from "react";
import "./LoadMoreButton.css";

function LoadMoreButton(props) {
  const userData = props.userData;
  const showRepo = props.showRepo;
  const setShowRepo = props.setShowRepo;

  function loadMore() {
    setShowRepo((prevValue) => prevValue + 2);
  }

  if (userData.public_repos <= 30) {
    if (showRepo <= userData.public_repos) {
      return (
        <button className="load-more" onClick={loadMore}>
          Load More
        </button>
      );
    } else {
      return <p className="max-repo">All repos are shown.</p>;
    }
  } else {
    if (showRepo <= 28) {
      return (
        <button className="load-more" onClick={loadMore}>
          Load More
        </button>
      );
    } else {
      return (
        <a
          className="view-more"
          target="_blank"
          rel="noopener noreferrer"
          href={`https://github.com/${userData.login}?tab=repositories`}
        >
          <div className="view-more-button">View More on GitHub</div>
        </a>
      );
    }
  }
}

export default LoadMoreButton;
