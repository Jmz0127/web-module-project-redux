import React from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { deleteMovie } from '../actions/movieActions';
import { addFavorite } from '../actions/favoritesActions';
const Movie = (props) => {
	const { id } = useParams();
	const { push } = useHistory();

	const { movies, displayFavorites, deleteMovie, addFavorite } = props;
	const movie = movies.find((movie) => movie.id === Number(id));
	const handleDeleteClick = () => {
		deleteMovie(movie.id);
		push('/movies');
	};
	const handleFavorite = () => {
		addFavorite(movie);
	};

	return (
		<div className='modal-page col'>
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h4 className='modal-title'>{movie.title} Details</h4>
					</div>
					<div className='modal-body'>
						<div className='flexContainer'>
							<section className='movie-details'>
								<div>
									<label>
										Title: <strong>{movie.title}</strong>
									</label>
								</div>
								<div>
									<label>
										Director: <strong>{movie.director}</strong>
									</label>
								</div>
								<div>
									<label>
										Genre: <strong>{movie.genre}</strong>
									</label>
								</div>
								<div>
									<label>
										Metascore: <strong>{movie.metascore}</strong>
									</label>
								</div>
								<div>
									<label>Description:</label>
									<p>
										<strong>{movie.description}</strong>
									</p>
								</div>
							</section>

							<section>
								{displayFavorites && (
									<span onClick={handleFavorite} className='m-2 btn btn-dark'>
										Favorite
									</span>
								)}
								<span className='delete' onClick={handleDeleteClick}>
									{' '}
									{/*Find the HTML element that should trigger a deletion in the movie component. Create and connect the necessary event handlers to call deleteMovie on the current movie's id. After setting the state, redirect the user using the push('/movies') command. */}
									<input type='button' className='m-2 btn btn-danger' value='Delete' />
								</span>
							</section>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	// The Movie component needs to access our list of movies to function. Map movies to props here as well.
	return {
		displayFavorites: state.favoritesReducer.displayFavorites, //Connect the displayFavorites state to the Movie component.
		movies: state.movieReducer.movies
	}; //Notice that your movie functions no longer work. Why? Make changes necessary to get the component connected to the movie reducer working again.
};
export default connect(mapStateToProps, { deleteMovie, addFavorite })(Movie); // We can delete movies within the Movie Component. Connect the deleteMovie action through the connect method.
