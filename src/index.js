import React from 'react';
import ReactDOM from 'react-dom';
import Hemisphere from './Hemisphere';

const App = () => {
	window.navigator.geolocation.getCurrentPosition(
		(position) => console.log(position),
		(error) => console.log(error)
	);

	return (
		<div>
			<h1>Hi, there, test successful</h1>
			<Hemisphere />
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
