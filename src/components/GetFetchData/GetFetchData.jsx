import React from 'react';
import useJsonFetch from '../../hooks/useJsonFetch';

export default function GetFetchData() {
  const url = `${process.env.REACT_APP_SERVER_URL}data`;
  const [{ data, loading, error }] = useJsonFetch(url);

  return (
    <React.Fragment>
      {loading && <span className="loading">Загрузка данных, подождите...</span>}
      {error && <span className="error">{error}</span>}
      {data && <span>Получили данные с ресурса {url}: {data}</span>}
    </React.Fragment>
  );
}
