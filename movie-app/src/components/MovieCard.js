import React from 'react';
import { addFavourite } from '../action';

class MovieCard extends React.Component {
    handleFavouriteClick = () => {
        const { movie } = this.props;
        this.props.dispatch(addFavourite(movie));
    }

    render() {
        const { movie, isMovieFavourite } = this.props;
        return (
            <div className="movie-card">

                <div className="left">
                    <img alt="movie-poster" src={movie.Poster} />
                </div>
                <div className="right">
                    <div className="title">
                        {movie.Title}
                    </div>
                    <div className="plot">
                        {movie.Plot}
                    </div>
                    <div className="card-footer">
                        <div className="rating">
                            {movie.imdbRating}
                        </div>

                        {
                            (isMovieFavourite == false) ?
                                <button className="favourite-btn" onClick={this.handleFavouriteClick}>
                                    Favourite
                                </button> :
                                <button className="Unfavourite-btn" >Unfavourite</button>
                        }
                    </div>

                </div>
            </div>
        );
    }
}

export default MovieCard;
