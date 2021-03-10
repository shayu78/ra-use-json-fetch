import { useState, useEffect } from 'react';

export default function useJsonFetch(url, opts) {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${url}${opts}`);
        if (!response.ok) throw new Error(response.statusText);
        const data = await response.json();
        setData(data.status);
      } catch (e) {
        setError(`Ошибка загрузки данных с ресурса ${url}${opts} (${e.message})`);
        setData(undefined);
        setTimeout(() => setError(null), 3000);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, opts]);

  return [{data, loading, error}];
}
