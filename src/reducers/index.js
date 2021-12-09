import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoritesReducer from './favoritesReducer'; //Import your new reducer file into the ./reducers/index.js file. As a start, only add a default case to the switch statement.

const rootReducer = combineReducers({
	movieReducer,
	favoritesReducer
});

export default rootReducer;
