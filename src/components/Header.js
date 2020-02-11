import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actionCreators';

const Header = props => {
	const { inputValue, inputChangeAction } = props;
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
				/>
			</section>
		</header>
	);
};

const mapStateToProps = state => ({
	inputValue: state.inputValue
});

export default connect(mapStateToProps, actionCreators)(Header);
