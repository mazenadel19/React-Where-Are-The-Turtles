import React from 'react';
import styles from './TurtleItem.module.css';

const TurtleItem = ({ turtles, onDeleteTurtle }) => {
	const renderedlist = turtles.map((turtle) => (
		<div
			key={turtle.id}
			onClick={() => {
				onDeleteTurtle(turtle.id);
			}}>
			<div className={styles.turtle}>
				{turtle.name} {`(${turtle.age} years old)`}
			</div>
		</div>
	));

	return <div>{renderedlist}</div>;
};

export default TurtleItem;
