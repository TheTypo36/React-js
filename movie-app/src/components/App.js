import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies, setShowFavourite } from '../action';
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
  }
  isFavourite = (movie) => {
    const { favourites } = this.props.store.getState();
    const index = favourites.indexOf(movie);
    if (index === -1) {
      return true;
    }
    return false;
  }
  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourite(val));
  }
  render() {
    const { list, favourites, ShowFavourites } = this.props.store.getState();//{list:[], favourites:[]}
    console.log('render');
    let displayShow = (ShowFavourites === true) ? favourites : list;
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${ShowFavourites ? '' : 'active-tabs'}`} onClick={() => this.onChangeTab(false)}>
              Movies
            </div>
            <div className={`tab ${ShowFavourites ? 'active-tabs' : ''}`} onClick={() => this.onChangeTab(true)}>
              Favourites
            </div>
          </div>
          <div className="List">
            {displayShow.map((movie, index) => (
              <MovieCard
                store={this.props.store}
                isFavourite={this.isFavourite}
                movie={movie}
                key={`movie-${index}`} />
            ))}


          </div>
        </div>
      </div>
    );
  }
}
export default App;
