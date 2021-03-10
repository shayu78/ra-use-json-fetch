import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Details(props) {
  const { info } = props;
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      setData(null);
      try {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}${info.id}.json`);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setData(data);
        setError(null);
      } catch (e) {
        setError(e.message);
        setTimeout(() => setError(null), 3000);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [info.id]);

  return (
    <React.Fragment>
      {isLoading && <p className="loading">Загрузка данных, подождите...</p>}
      {error && <p className="error">{error}</p>}
      {data && <div className="user__details__wrapper">
        <img className="user__details__image" src={data.avatar} alt={data.avatar} />
        <span className="user__details__name">{data.name}</span>
        <span className="user__details__city">City: {data.details.city}</span>
        <span className="user__details__company">Company: {data.details.company}</span>
        <span className="user__details__position">Position: {data.details.position}</span>
      </div>}
    </React.Fragment>
  );
}

Details.propTypes = {
  info: PropTypes.object.isRequired,
};
