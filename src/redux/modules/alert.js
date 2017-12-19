// ------------------------------------
// Constants
// ------------------------------------
export const SHOW_ALERT = 'SHOW_ALERT';
export const HIDE_ALERT = 'HIDE_ALERT';

const initialState = {
	visible: false,
	header: '',
	content: '',
	buttonText: 'OK',
	resourceIdToLaunchOnClose: null
};

export const showAlert = (options) => ({
	type: SHOW_ALERT,
	options
});

export const hideAlert = (payload) => ({
	type: HIDE_ALERT
});

// fetches nitro challenges

export const actions = {
	showAlert,
	hideAlert
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
	[SHOW_ALERT]: (state, action) => ({...state, ...action.options, visible: true}),
	[HIDE_ALERT]: (state, action) => ({...state, resourceIdToLaunchOnClose: null, visible: false})
};

// ------------------------------------
// Reducer
// ------------------------------------
export default function alertReducer(state = initialState, action) {
	const handler = ACTION_HANDLERS[action.type];
	return handler ? handler(state, action) : state;
}
