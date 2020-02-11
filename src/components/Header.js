import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actionCreators';

const Header = props => {
	const { inputValue, inputChangeAction, inputKeyUpAction } = props;
	// inputChangeAction 确实是需要实时发起 action
	const handleKeyUp = e => {
		// 确实是 keyCode 等于 13 的时候才需要发起 action
		if (e.keyCode === 13) {
			if (!e.target.value) {
				return alert('内容不能为空');
			}
			inputKeyUpAction(e.target.value);
		}
	};
	return (
		<header>
			<section>
				<label htmlFor="title">ToDoList</label>
				<input
					type="text"
					id="title"
					name="title"
					placeholder="添加ToDo"
					required="required"
					autoComplete="off"
					value={inputValue}
					onChange={inputChangeAction}
					onKeyUp={handleKeyUp}
				/>
			</section>
		</header>
	);
};

const mapStateToProps = state => ({
	inputValue: state.inputValue
});

export default connect(mapStateToProps, actionCreators)(Header);
