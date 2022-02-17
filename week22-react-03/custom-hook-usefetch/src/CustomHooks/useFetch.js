 import { useState, useEffect } from "react";
 
 const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    const getPerson = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const [person] = data.results;
        setData(person);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    };

    getPerson();
  }, []);

  return { data, isLoading, hasError };
};

export default useFetch;