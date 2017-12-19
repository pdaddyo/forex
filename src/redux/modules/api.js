/* @flow */
/*
 import {showAlert} from './alert';
 import Cookies from 'cookies-js';

 import fetchOptions from 'constants/fetchOptions';

 // ------------------------------------
 // Constants
 // ------------------------------------
 export const REQUEST_CURRENT_USER_DETAILS = 'REQUEST_CURRENT_USER_DETAILS';
 export const RECEIVE_CURRENT_USER_DETAILS = 'RECEIVE_CURRENT_USER_DETAILS';
 export const UPDATE_CURRENT_USER_DETAILS_WITH_GOOGLE_PROFILE = 'UPDATE_CURRENT_USER_DETAILS_WITH_GOOGLE_PROFILE';

 let defaultUserInfo = {
 isFetching: false,
 requireFirstTimeGoogleAuth: false,
 currentAuthUserId: 0,
 currentViewUserId: 0
 };

 export const requestCurrentUser = () => ({
 type: REQUEST_CURRENT_USER_DETAILS
 });

 export const receiveCurrentUser = (payload) => ({
 type: RECEIVE_CURRENT_USER_DETAILS,
 payload
 });

 export const updateCurrentUserDetailsWithGoogleProfile = (profile) => ({
 type: UPDATE_CURRENT_USER_DETAILS_WITH_GOOGLE_PROFILE,
 profile
 });

 // fetches current user details, will post google profile to update on server if passed in too.
 export const fetchCurrentUserDetails = (optionalGoogleProfile) => {
 return (dispatch, getState) => {
 dispatch(requestCurrentUser());
 dispatch(beginFetch());
 return fetch(`${window.apiLocation}/user/details`, {
 ...fetchOptions,
 body: optionalGoogleProfile ? JSON.stringify(optionalGoogleProfile) : null
 })
 .then(response => {
 dispatch(endFetch());
 if (response.status > 400) {
 // todo: dispatch error action
 console.log(`Error : status code: ${response.status} url: /user/details`);

 dispatch(showAlert({
 header: 'Server error',
 content: 'Oops, an error occurred connecting to the Academy server. ' +
 'Please try again in a few minutes. '
 }));
 }
 return response.json();
 })
 .then(json => {
 if (json.dataItems) {
 dispatch(receiveDataItems(json.dataItems));
 }

 dispatch(receiveCurrentUser(json));

 // now we have a current user, get straight onto the nitro api since it can be slow!
 if (!optionalGoogleProfile) {
 dispatch(fetchNitroChallenges());
 }

 // get current user
 const {users} = getState().data;
 const currentUser = users[json.currentAuthUserId];

 // check we are viewing our own user and not on dreamm dev server
 if (json.currentAuthUserId === json.currentViewUserId &&
 window.location.href.indexOf('academydev.dreamm.co.uk') === -1) {
 const userGoogleCookieName = `user-${json.currentAuthUserId}-google-auth`;

 if (Cookies.get(userGoogleCookieName) !== 'true' || !currentUser.profilePicUrl) {
 // there is no cookie or no profile (using pic to check)
 dispatch(startGoogleAuthProcess());
 }
 }
 })
 .catch(err => {
 console.log(`catch() Error url: /user/details, err: ${err}`);
 dispatch(showAlert({
 header: 'Server error',
 content: 'Oops, an error occurred connecting to the Academy server. ' +
 'Please try again in a few minutes. '
 }));
 throw err;
 });
 };
 };

 export const initialLogin = () => {
 return (dispatch, getState) => {
 if (!getState().auth.isFetching) {
 return dispatch(fetchCurrentUserDetails());
 }
 };
 };

 export const actions = {
 requestCurrentUser,
 receiveCurrentUser,
 updateCurrentUserDetailsWithGoogleProfile,
 initialLogin
 };

 // used when mapping state to props on components
 export const mapStateToCurrentUser = (state) => {
 let {auth, data} = state;

 if (auth.currentViewUserId === 0) {
 return null;
 }
 return {
 ...data.users[auth.currentViewUserId],
 isAdminViewingAnotherUser: auth.currentViewUserId !== auth.currentAuthUserId
 };
 };

 // ------------------------------------
 // Action Handlers
 // ------------------------------------
 const ACTION_HANDLERS = {
 [REQUEST_CURRENT_USER_DETAILS]: (state, action) => ({...state, isFetching: true}),
 [RECEIVE_CURRENT_USER_DETAILS]: (state, action) => {
 let {currentAuthUserId, currentViewUserId} = action.payload;
 return {
 ...state,
 isFetching: false,
 currentAuthUserId: currentAuthUserId,
 currentViewUserId: currentViewUserId
 };
 }
 };

 // ------------------------------------
 // Reducer
 // ------------------------------------
 const initialState = defaultUserInfo;

 export default function currentUserReducer(state = initialState, action) {
 const handler = ACTION_HANDLERS[action.type];
 return handler ? handler(state, action) : state;
 }
 */
