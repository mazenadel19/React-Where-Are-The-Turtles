import React, { useState } from 'react';
import Card from '../Card/Card';
import styles from './TurtleForm.module.css';

const TurtleForm = ({ onAddTurtle }) => {
	const [name, setName] = useState('');
	const [age, setAge] = useState('');

	const nameChangeHandler = (e) => {
		setName(e.target.value);
	};

	const ageChangeHandler = (e) => {
		setAge(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		if (name.trim().length === 0) return alert("Turtle name can't be empty");
		if (age.trim().length === 0) return alert("Turtle age can't be empty");
		if (age < 0)
			return alert(`RIP Turtle /n Turtle age can't be a negative number`);

		onAddTurtle({
			name,
			age,
		});
		setName('');
		setAge('');
	};

	return (
		<Card>
			<form method='post' className={styles.form} onSubmit={submitHandler}>
				<div>
					<label htmlFor='name'>Turtle Name</label>
					<input
						type='text'
						name='name'
						id='name'
						value={name}
						onChange={nameChangeHandler}
					/>
				</div>
				<div>
					<label htmlFor='age'>Turtle Age (Years)</label>
					<input
						type='number'
						name='age'
						id='age'
						value={age}
						onChange={ageChangeHandler}
					/>
				</div>
				<button>Add Turtle</button>
			</form>
		</Card>
	);
};

export default TurtleForm;
