import React from 'react';
import { connect } from 'react-redux';

const Content = props => {
	const { list } = props;
	const renderItem = () => {
		return list.map(item =>
			<li key={item.id}>
				<input type="checkbox" />
				<p>
					{item.title}
				</p>
				<i />
			</li>
		);
	};
	return (
		<section>
			<h2>
				正在进行 <span id="todocount">1</span>
			</h2>
			<ol id="todolist" className="demo-box">
				{renderItem()}
			</ol>
			<h2>
				已经完成 <span id="donecount">0</span>
			</h2>
			<ul id="donelist" />
		</section>
	);
};
const mapStateToProps = state => ({
	list: state.list
});

export default connect(mapStateToProps, null)(Content);
