import React from 'react';
import Card from '../../UI/Card/Card';
import TurtleItem from '../TurtleItem/TurtleItem';
import styles from './TurtlesList.module.css';

const TurtlesList = ({ turtles, onDeleteTurtle }) => {
	return (
		<Card className={styles.turtleListPadding}>
			<TurtleItem turtles={turtles} onDeleteTurtle={onDeleteTurtle} />
		</Card>
	);
};

export default TurtlesList;
