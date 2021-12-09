import { REMOVE_FAVORITE, TOGGLE_FAVORITES, ADD_FAVORITE } from '../actions/favoritesActions';
import { ADD_MOVIE } from '../actions/movieActions';

//set up initialState
const initialState = {
	favorites: [
		{ title: 'Movie', id: 1 },
		{ title: 'Movie', id: 2 }
	],
	displayFavorites: true
};

//create reducer itself.  Create a reducer file for handling business logic for favorites. Include the following state values in your initialState setup:

//favorites: an array of movie objects
//displayFavorites: a boolean that holds if favorite elements should be displayed in app

const favoritesReducer = (state = initialState, action) => {
	switch (action.type) {
		//Add in reducer cases, action creators and event handler code for the following actions:

		//toggleFavorites : Switches the displayFavorites state value between true and false. When displayFavorites is true, the favorite button does not show on the Movie page.
		case TOGGLE_FAVORITES: {
			return {
				...state,
				displayFavorites: !state.displayFavorites
			};
		}
		//addFavorites: Adds in a new movie object into the favorites list.
		case ADD_FAVORITE: {
			return {
				...state,
				favorites: [...state.favorites, action.payload]
			};
		}

		//removeFavorite: Removes a movie Object from the favorites list with an id passed in.
		case REMOVE_FAVORITE: {
			return {
				...state,
				favorites: state.filter((item) => item.id !== action.payload)
			};
		}
		default:
			return state;
	}
};

export default favoritesReducer;
