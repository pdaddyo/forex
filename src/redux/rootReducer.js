import {combineReducers} from 'redux';
import {routerReducer as router} from 'react-router-redux';
import api from './modules/api';
import alert from './modules/alert';

export default combineReducers({
	api,
	router,
	alert
});
