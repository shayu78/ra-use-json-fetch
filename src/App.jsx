import React from 'react';
import './App.css';
import GetFetchDataComponent from './components/GetFetchDataComponent/GetFetchDataComponent';

function App() {

  return (
    <div className='component__wrapper'>
      <GetFetchDataComponent url={process.env.REACT_APP_SERVER_URL} opts={'data'}/>
      <GetFetchDataComponent url={process.env.REACT_APP_SERVER_URL} opts={'loading'}/>
      <GetFetchDataComponent url={process.env.REACT_APP_SERVER_URL} opts={'error'}/>
    </div>
  );

}

export default App;
