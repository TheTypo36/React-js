import React from "react";
import { connect } from "react-redux";
import { addMovies, handleMovieSearch } from "../action";
import { data } from "../data";
class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      showSearchResult: true,
      searchText: "",
    };
  }
  handleAddToMovies = (movie) => {
    this.props.dispatch(addMovies);
    this.setState({
      showSearchResult: false,
    });
  };
  handleSearch = () => {
    const { searchText } = this.state;

    this.props.dispatch(handleMovieSearch(searchText));
  };
  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };
  render() {
    const { showSearchResult } = this.state;
    return (
      <div className="nav">
        <div className="search-container">
          <input type="text" name="movie" onChange={this.handleChange} />

          <button id="search-btn" onClick={this.handleSearch}>
            Search
          </button>
          {showSearchResult && (
            <div className="search-results">
              <div className="search-result">
                <img src={data[0].Poster} />
                <div className="movie-info">
                  <span>{data[0].Title}</span>
                  <button onClick={() => this.handleAddToMovies(data[0])}>
                    Add To Movies
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

// class NavbarWrapper extends React.Component {
//     render() {
//         return (
//             <StoreContext.Consumer>
//                 {(store) => <Navbar store={store} />}
//             </StoreContext.Consumer>
//         );
//     }
// }
// export default NavbarWrapper;

function mapStateToProps(state) {
  return {
    movies: state.movies,
    search: state.search,
  };
}

const ConnectedNavComponent = connect(mapStateToProps)(Navbar);
export default ConnectedNavComponent;
