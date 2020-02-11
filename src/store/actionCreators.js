import { CHANGE_INPUT, ADD_ITEM } from './actionTypes';
export const inputChangeAction = e => ({
	type: CHANGE_INPUT,
	value: e.target.value
});

export const inputKeyUpAction = value => ({
	type: ADD_ITEM,
	title: value,
	completed: false,
	id: (+new Date()).toString()
});
