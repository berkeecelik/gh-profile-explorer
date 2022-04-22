import { useEffect, useState } from "react";
import axios from "axios";

function useFetchUserData(user) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${user}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [user]);

  return { data, loading, error };
}

export default useFetchUserData;
