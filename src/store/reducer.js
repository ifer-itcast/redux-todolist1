import { CHANGE_INPUT } from './actionTypes';

const defaultState = {
	inputValue: ''
};

const reducer = (state = defaultState, action) => {
	const newState = JSON.parse(JSON.stringify(state));
	switch (action.type) {
		case CHANGE_INPUT:
			newState.inputValue = action.value;
			return newState;
		default:
			return state;
	}
};
export default reducer;
