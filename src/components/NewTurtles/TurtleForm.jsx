import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import ErrorModal from '../UI/Modal/ErrorModal';
import styles from './TurtleForm.module.css';

const TurtleForm = ({ onAddTurtle }) => {
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [error, setError] = useState();

	const nameChangeHandler = (e) => {
		setName(e.target.value);
	};

	const ageChangeHandler = (e) => {
		setAge(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		if (name.trim().length === 0)
			return setError({
				title: 'Invalid Name',
				message: "Turtle name can't be empty",
			});
		if (age.trim().length === 0)
			return setError({
				title: 'Invalid Age',
				message: "Turtle age can't be empty",
			});
		if (+age < 0)
			return setError({
				title: 'Invalid Age',
				message: "RIP turtle...Turtle age can't be a negative number",
			});

		onAddTurtle({
			name,
			age,
		});
		setName('');
		setAge('');
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					errorHandler={errorHandler}
				/>
			)}
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
							className={`${!name && styles['invalid-input']}`}
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
							className={`${!age && styles['invalid-input']} ${
								age < 0 && styles['invalid-input']
							}`}
						/>
					</div>
					<Button type='submit'>Add Turtle</Button>
				</form>
			</Card>
		</>
	);
};

export default TurtleForm;
