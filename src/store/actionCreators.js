import { CHANGE_INPUT } from './actionTypes';
export const inputChangeAction = e => ({
	type: CHANGE_INPUT,
	value: e.target.value
});
