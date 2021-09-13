import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './components/App';


// console.log('store', store);
// console.log('state', store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{
//     name: 'supername'
//   }]
// });
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


