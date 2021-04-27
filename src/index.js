import React from 'react';
import ReactDOM from "react-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
// Minified bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Reasearch more on how to send to an analytics endpoint. 
// Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
