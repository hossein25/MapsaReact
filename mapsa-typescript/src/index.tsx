import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Tours from './Tours';

ReactDOM.render(
  <React.StrictMode>
    {/* <App firstName="ali" /> */}
    <Tours />
  </React.StrictMode>,
  document.getElementById('root')
);