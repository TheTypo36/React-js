import React from 'react';
import { addFavourite, removeFavourite } from '../action';
class MovieCard extends React.Component {
    handleFavouriteClick = () => {
        const { movie } = this.props;
        this.props.store.dispatch(addFavourite(movie));
        console.log('state', this.props.store.getState());



    }
    handleUnfavouriteClick = () => {
        const { movie } = this.props;
        this.props.store.dispatch(removeFavourite(movie));
        console.log('state', this.props.store.getState());
    }
    render() {
        const { movie } = this.props;
        return (
            <div className="movie-card">
                <div className="left">
                    <img src={movie.Poster} alt="movie-poster" />
                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="card-footer">
                        <div className="rating">{movie.imdbRating}</div>
                        {

                            (this.props.isFavourite(movie)) ?
                                <button className="favourite-btn" onClick={this.handleFavouriteClick}>Favourite</button> :
                                <button className="Unfavourite-btn" onClick={this.handleUnfavouriteClick}>Unfavourite</button>
                        }
                    </div>
                </div>
            </div>
        );
    }
}
export default MovieCard;