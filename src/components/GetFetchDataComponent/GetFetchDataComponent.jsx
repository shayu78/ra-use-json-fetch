import React from 'react';
import PropTypes from 'prop-types';
import useJsonFetch from '../../hooks/useJsonFetch';

export default function GetFetchDataComponent(props) {
  const { url, opts } = props;
  const[{ data, loading, error }] = useJsonFetch(url, opts);

  return (
    <React.Fragment>
      {loading && <span className="loading">Загрузка данных, подождите...</span>}
      {error && <span className="error">{error}</span>}
      {data && <span>Получили данные с ресурса {url}{opts}: {data}</span>}
    </React.Fragment>
  );
}

GetFetchDataComponent.propTypes = {
  url: PropTypes.string.isRequired,
  opts: PropTypes.string.isRequired,
};
