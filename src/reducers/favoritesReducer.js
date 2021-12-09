//set up initialState
const initialState = {
	favorites: [
		{ title: 'Movie', id: 1 },
		{ title: 'Movie', id: 1 }
	],
	displayFavorites: true
};

//create reducer itself.  Create a reducer file for handling business logic for favorites. Include the following state values in your initialState setup:

//favorites: an array of movie objects
//displayFavorites: a boolean that holds if favorite elements should be displayed in app

const favoritesReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default favoritesReducer;
