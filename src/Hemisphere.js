import React from 'react';
import northPic from './image/NorthernHemisphere.jpg';
import southPic from './image/SouthernHemisphere.jpg';
import './Hemisphere.css';

const hemisphereConfig = {
	Northern: {
		text: 'Northern Hemisphere',
		picture: northPic,
	},
	Southern: {
		text: 'Southern Hemisphere',
		picture: southPic,
	},
};

const Hemisphere = ({ latitude }) => {
	const hemisphere = latitude > 0 ? 'Northern' : 'Southern';

	const { text, picture } = hemisphereConfig[hemisphere];
	return (
		<div className={hemisphere}>
			<div className="ui raised text container segment">
				<div className="image">
					<img src={picture} alt="pic" />
				</div>
				<div className="ui teal bottom attached label">
					<h1>Hi there, it's the {text}</h1>
				</div>
			</div>
		</div>
	);
};

export default Hemisphere;
