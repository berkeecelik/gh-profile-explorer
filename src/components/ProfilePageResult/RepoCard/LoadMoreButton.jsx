import React from "react";
import "./LoadMoreButton.css";

function LoadMoreButton(props) {
  const userData = props.userData;
  const showRepo = props.showRepo;
  const setShowRepo = props.setShowRepo;

  console.log(userData);
  console.log(showRepo);

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
      return <p>All repos are shown.</p>;
    }
  } else {
    if (showRepo <= 28) {
      return (
        <button className="load-more" onClick={loadMore}>
          Load More
        </button>
      );
    } else {
      return <p>--Show All--</p>;
    }
  }
}

export default LoadMoreButton;
