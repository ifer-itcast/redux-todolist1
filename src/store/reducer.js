import { CHANGE_INPUT, ADD_ITEM } from './actionTypes';

const defaultState = {
	inputValue: '',
	list: []
};

const reducer = (state = defaultState, action) => {
	const newState = JSON.parse(JSON.stringify(state));
	switch (action.type) {
		case CHANGE_INPUT:
			newState.inputValue = action.value;
			return newState;
		case ADD_ITEM:
			newState.list.unshift({
				title: action.title,
				completed: action.completed,
				id: action.id
			});
			newState.inputValue = '';
			return newState;
		default:
			return state;
	}
};
export default reducer;
