import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { configurestore } from './store/index.js';

const store = configurestore();
console.log('store', store);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
