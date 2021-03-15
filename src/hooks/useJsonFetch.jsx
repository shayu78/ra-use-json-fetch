import { useState, useEffect } from 'react';

export default function useJsonFetch(url, opts = null) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url, opts);
        if (!response.ok) throw new Error(response.statusText);
        const data = await response.json();
        setData(data.status);
      } catch (e) {
        setError(`Ошибка загрузки данных с ресурса ${url} (${e.message})`);
        setData(null);
        setTimeout(() => setError(null), 3000);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [opts, url]);

  return [{ data, loading, error }];
}
