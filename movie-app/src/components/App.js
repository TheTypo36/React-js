import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies, setShowFavourite } from '../action';
import { connect } from '../index';
class App extends React.Component {
  componentDidMount() {
    //make api call to server for the data
    //dispatch the action to the reducers for the intend to change the state.


    this.props.dispatch(addMovies(data));
  }
  isFavourite = (movie) => {
    const { movies } = this.props;
    const { favourites } = movies;
    const index = favourites.indexOf(movie);
    if (index === -1) {
      return true;
    }
    return false;
  }
  onChangeTab = (val) => {
    this.props.dispatch(setShowFavourite(val));
  }
  render() {
    console.log('app props', this.props);

    const { movies } = this.props;
    const { list, favourites, ShowFavourites } = movies;//{movies:{list:[], favourites:[]}, search:{result{}}}
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
                dispatch={this.props.dispatch}
                isFavourite={this.isFavourite}
                movie={movie}
                key={`movie-${index}`} />
            ))}
            {
              displayShow.length === 0 ? <div className="no-movies">No movies to display</div> : null
            }

          </div>
        </div>
      </div>
    );
  }
}

// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => <App store={store} />}
//       </StoreContext.Consumer>
//     );
//   }
// }

// export default AppWrapper;
function mapStateToProps(state) {
  return {
    movies: state.movies,
    search: state.search,

  };
}

const ConnectedAppComponent = connect(mapStateToProps)(App);

export default ConnectedAppComponent;