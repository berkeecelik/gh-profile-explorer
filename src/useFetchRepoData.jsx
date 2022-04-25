import { useEffect, useState } from "react";
import axios from "axios";

function useFetchRepoData(user) {
  const [repoData, setRepoData] = useState(null);
  const [repoLoading, setRepoLoading] = useState(false);
  const [repoError, setRepoError] = useState(null);

  useEffect(() => {
    setRepoLoading(true);
    axios
      .get(`https://api.github.com/users/${user}/repos`)
      .then((response) => {
        setRepoData(response.data);
      })
      .catch((err) => {
        setRepoError(err);
      })
      .finally(() => {
        setRepoLoading(false);
      });
  }, [user]);

  return { repoData, repoLoading, repoError };
}

export default useFetchRepoData;
