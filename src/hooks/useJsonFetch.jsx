import { useState, useEffect } from 'react';

export default function useJsonFetch(url, opts = 3000) {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${url}`);
        if (!response.ok) throw new Error(response.statusText);
        const data = await response.json();
        setData(data.status);
      } catch (e) {
        setError(`Ошибка загрузки данных с ресурса ${url} (${e.message})`);
        setData(undefined);
        setTimeout(() => setError(null), opts);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, opts]);

  return [{data, loading, error}];
}
