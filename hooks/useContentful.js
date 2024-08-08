// src/hooks/useContentful.js
import { useState, useEffect } from 'react';
import client from '../contentful';

const useContentful = (queries) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Log the queries to check their stability
    console.log('Fetching data with queries:', queries);

    const fetchData = async () => {
      try {
        const results = await Promise.all(
          queries.map(query => client.getEntries(query))
        );
        // Extract data from each result and store it in an object
        const dataObject = results.reduce((acc, result, index) => {
          acc[queries[index].content_type] = result.items;
          return acc;
        }, {});
        console.log('Fetched Data:', dataObject); // Debugging output
        setData(dataObject);
        setLoading(false);
      } catch (err) {
        console.error('Fetch Error:', err); // Error output
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [JSON.stringify(queries)]); // Ensure queries are stringified for dependency stability

  return { data, loading, error };
};

export default useContentful;
