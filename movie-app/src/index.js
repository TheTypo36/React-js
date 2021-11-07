import React, { createContext } from 'react';
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
export const StoreContext = createContext();
console.log("StoreContext", StoreContext);






class Provider extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <StoreContext.Provider value={store}>
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}



console.log('after state', store.getState());


export function connect(callback) {
  return function (Component) {
    class ConnectedComponent extends React.Component {
      constructor(props) {
        super(props);
        this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
      }
      componentWillUnmount() {
        this.unsubscribe();
      }
      render() {

        const { store } = this.props;
        const state = store.getState();
        const dataToBePassed = callback(state);
        return (

          <Component
            {...dataToBePassed}
            dispatch={store.dispatch}
          />
        );
      }
    }



    class ConnectedComponentWrapper extends React.Component {
      render() {
        return (
          <StoreContext.Consumer>
            {(store) =>
              <ConnectedComponent store={store} />
            }
          </StoreContext.Consumer>
        );
      }
    }
    return ConnectedComponentWrapper;

  };

}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


