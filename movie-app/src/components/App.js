import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies } from '../action';
class App extends React.Component {
  componentDidMount() {
    //make api call to server for the data
    //dispatch the action to the reducers for the intend to change the state.
    const { store } = this.props;
    store.subscribe(() => {
      console.log('updated');
      this.forceUpdate();
    });

    store.dispatch(addMovies(data));
    console.log('state', this.props.store.getState());
  }
  render() {
    const { list } = this.props.store.getState();//{list:[], favourites:[]}
    console.log('render');
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">
              movies
            </div>
            <div className="tab">
              Favourites
            </div>
          </div>
          <div className="List">
            {list.map((movie, index) => (
              <MovieCard movie={movie} key={`movies-${index}`} />
            ))};
          </div>
        </div>
      </div>
    );
  }
}
export default App;
