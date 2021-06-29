import React, { useRef, useState } from 'react';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import ErrorModal from '../UI/Modal/ErrorModal';
import styles from './TurtleForm.module.css';

const TurtleForm = ({ onAddTurtle }) => {
	const nameInputRef = useRef();
	const ageInputRef = useRef();

	const [error, setError] = useState();

	const submitHandler = (e) => {
		e.preventDefault();

		const turtleName = nameInputRef.current.value;
		const turtleAge = ageInputRef.current.value;

		if (turtleName.trim().length === 0) {
			return setError({
				title: 'Invalid Name',
				message: "Turtle name can't be empty",
			});
		}
		if (turtleAge.trim().length === 0) {
			return setError({
				title: 'Invalid Age',
				message: "Turtle age can't be empty",
			});
		}
		if (+turtleAge < 0) {
			return setError({
				title: 'Invalid Age',
				message: "RIP turtle...Turtle age can't be a negative number",
			});
		}

		onAddTurtle({
			name: turtleName,
			age: turtleAge,
		});
		nameInputRef.current.value = '';
		ageInputRef.current.value = '';
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
						<input type='text' name='name' id='name' ref={nameInputRef} />
					</div>
					<div>
						<label htmlFor='age'>Turtle Age (Years)</label>
						<input type='number' name='age' id='age' ref={ageInputRef} />
					</div>
					<Button type='submit'>Add Turtle</Button>
				</form>
			</Card>
		</>
	);
};

export default TurtleForm;
