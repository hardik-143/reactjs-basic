import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/fonts.scss'
import '../node_modules/rsuite/dist/rsuite.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/common.scss'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);
