import React from 'react';

const Content = props => {
	return (
		<section>
			<h2>
				正在进行 <span id="todocount">1</span>
			</h2>
			<ol id="todolist" className="demo-box">
				<li>
					<input type="checkbox" />
					<p>吃饭睡觉打豆豆</p>
					<i />
				</li>
			</ol>
			<h2>
				已经完成 <span id="donecount">0</span>
			</h2>
			<ul id="donelist" />
		</section>
	);
};

export default Content;
