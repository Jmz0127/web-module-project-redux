import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
	movies: movies,
	appTitle: 'IMDB Movie Database'
};

const reducer = (state = initialState, action) => {
	//In movieReducer.js, make sure that we are setting our state by default to initialState
	switch (action.type) {
		case DELETE_MOVIE:
			return {
				...state,
				movies: state.movies.filter((item) => action.payload !== item.id)
			};
		default:
			return state;
	}
};

export default reducer;
