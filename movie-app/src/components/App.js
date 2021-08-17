import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovie, setShowFavourite } from '../action';

class App extends React.Component {

  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log('updated');
      this.forceUpdate();
    })
    //make api call 
    //dispatch action
    store.dispatch(addMovie(data));
    console.log('state', this.props.store.getState());
  }
  isMovieFavourite = (movie) => {
    const { favourites } = this.props.store.getState();
    const index = favourites.indexOf(movie);
    if (index !== -1) {
      return true;
    } else {
      return false;
    }

  }
  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourite(val));
  }

  render() {
    const { list, favourites, showFavourites } = this.props.store.getState();
    let displayMovies = (showFavourites === true) ? favourites : list;
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? '' : 'active-tabs'}`} onClick={() => this.onChangeTab(false)}>Movie</div>
            <div className={`tab ${showFavourites}?'active-tabs':''`} onClick={() => this.onChangeTab(true)}> favourites</div>
          </div>
          <div className="list">

            {
              displayMovies.map((movie, index) => (
                <MovieCard movie={movie} isMovieFavourite={this.isMovieFavourite(movie)} dispatch={this.props.store.dispatch} key={`movies-${index}`} />
              ))
            }

          </div>
          {displayMovies.length == 0 ? <div className="no-movies">No Movies to display!</div> : null}
        </div>
      </div>
    );
  }
}

export default App;
