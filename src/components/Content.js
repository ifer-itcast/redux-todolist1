import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actionCreators';

const Content = props => {
	const { list, checkboxChangeAction } = props;
	const renderItem = completed => {
		return list.filter(item => item.completed === completed).map(item =>
			<li key={item.id}>
				<input type="checkbox" checked={completed} onChange={checkboxChangeAction} data-id={item.id} />
				<p>
					{item.title}
				</p>
				<i data-id={item.id} />
			</li>
		);
	};
	return (
		<section>
			<h2>
				正在进行 <span id="todocount">1</span>
			</h2>
			<ol id="todolist" className="demo-box">
				{renderItem(false)}
			</ol>
			<h2>
				已经完成 <span id="donecount">0</span>
			</h2>
			<ul id="donelist">
				{renderItem(true)}
			</ul>
		</section>
	);
};
const mapStateToProps = state => ({
	list: state.list
});

export default connect(mapStateToProps, actionCreators)(Content);
