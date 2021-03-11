import React from 'react';
import './App.css';
import GetFetchData from './components/GetFetchData/GetFetchData';
import GetFetchError from './components/GetFetchError/GetFetchError';
import GetFetchLoading from './components/GetFetchLoading/GetFetchLoading';

function App() {

  return (
    <div className='component__wrapper'>
      <GetFetchData />
      <GetFetchLoading />
      <GetFetchError />
    </div>
  );

}

export default App;
