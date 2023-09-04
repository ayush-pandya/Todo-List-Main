import { useState, useEffect } from 'react';

function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

async function fetchData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const responseData = await response.json();
    setData(responseData);
    setLoading(false);
    setError(null);
  } catch (err) {
    console.log(err)
    setError(err);
    setLoading(false);
    setData(null);
  }
}
  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    // Trigger a re-fetch by changing the state
    setLoading(true); // Set loading to true to show loading indicator
    fetchData(); // Make the API call again
  };
  return { data, loading, error, refetch: handleRefresh };
}

export default useApi;
