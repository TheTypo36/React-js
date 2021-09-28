import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';

//first way of writing middleware
// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       console.log('Action type is:', action.type);
//       next(action);
//     }
//   }
// }

//second way for writting the middlware
const logger = ({ dispatch, getState }) => (next) => (action) => {
  console.log('Action type is:', action.type);
  next(action);
}
const store = createStore(rootReducer, applyMiddleware(logger));
console.log('store', store);
// console.log('before state', store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{ name: 'Superman' }]
// });


console.log('after state', store.getState());
ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);


