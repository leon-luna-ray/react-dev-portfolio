import React from 'react';
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// After
import { createRoot } from 'react-dom/client';
import App from './App';

import "bootstrap/dist/css/bootstrap.min.css";

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
