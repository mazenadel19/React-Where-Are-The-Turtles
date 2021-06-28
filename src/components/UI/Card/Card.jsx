import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {
	console.log(props);
	return (
		<div className={`${styles.turtleform} ${props.className}`}>
			{props.children}
		</div>
	);
};

export default Card;
