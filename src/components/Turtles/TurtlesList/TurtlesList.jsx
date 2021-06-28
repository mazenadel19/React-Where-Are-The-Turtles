import React from 'react';
import Card from '../../Card/Card';
import TurtleItem from '../TurtleItem/TurtleItem';

const TurtlesList = ({ turtles, onDeleteTurtle }) => {
	return (
		<Card>
			<TurtleItem turtles={turtles} onDeleteTurtle={onDeleteTurtle} />
		</Card>
	);
};

export default TurtlesList;
