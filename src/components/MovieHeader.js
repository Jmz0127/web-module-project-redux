import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleFavorites } from '../actions/favoritesActions';

const MovieHeader = (props) => {
	const { appTitle, displayFavorites, toggleFavorites } = props;

	const handleClick = () => {
		toggleFavorites();
	};
	return (
		<div className='table-title'>
			<div className='row'>
				<div className='col-sm-6'>
					<h2>{appTitle}</h2>
				</div>
				<div className='col-sm-6 headerBar'>
					<div onClick={handleClick} className='btn btn-sm btn-primary'>
						<span>{displayFavorites ? 'Hide' : 'Show'} Favorites</span>
					</div>
					<Link to='/movies' className='btn btn-sm btn-primary'>
						View All Movies
					</Link>
					<Link to='/movies/add' className='btn btn-sm btn-success'>
						<i className='material-icons'>&#xE147;</i> <span>Add New Movie</span>
					</Link>
				</div>
			</div>
		</div>
	);
};
const mapStateToProps = (state) => {
	//Finally, MovieHeader uses appTitle to display the title text. Connect this component to appTitle and test appTitle is correctly displayed in your app.
	return {
		displayFavorites: state.favoritesReducer.displayFavorites, //Connect the displayFavorites state to the MovieHeader component.
		appTitle: state.movieReducer.appTitle //Notice that your movie functions no longer work. Why? Make changes necessary to get the component connected to the movie reducer working again.
	};
};

export default connect(mapStateToProps, { toggleFavorites })(MovieHeader);
