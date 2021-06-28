import React from 'react';
import Card from '../Card/Card';
import styles from './UserForm.module.css';

const UserForm = () => {
	return (
		<Card>
			<form method='post' className={styles.form}>
				<div>
					<label htmlFor='username'>Username</label>
					<input type='text' name='username' id='username' />
				</div>
				<div>
					<label htmlFor='age'>Age (Years)</label>
					<input type='number' name='age' id='age' />
				</div>
			</form>
			<button>Add User</button>
		</Card>
	);
};

export default UserForm;
