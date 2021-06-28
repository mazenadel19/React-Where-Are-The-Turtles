import React, { useState } from 'react';
import Card from '../Card/Card';
import styles from './UserForm.module.css';

const UserForm = ({ onAddUser }) => {
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
		if (name.trim().length === 0) return alert("Username can't be empty");
		if (age.trim().length === 0) return alert("age can't be empty");
		if (age < 0) return alert(`age can't be a negative number`);

		onAddUser({
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
					<label htmlFor='UserName'>Username</label>
					<input
						type='text'
						name='UserName'
						id='UserName'
						value={name}
						onChange={nameChangeHandler}
					/>
				</div>
				<div>
					<label htmlFor='age'>Age (Years)</label>
					<input
						type='number'
						name='age'
						id='age'
						value={age}
						onChange={ageChangeHandler}
					/>
				</div>
				<button>Add User</button>
			</form>
		</Card>
	);
};

export default UserForm;
