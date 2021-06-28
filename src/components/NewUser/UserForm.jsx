import React from 'react';
import styles from './UserForm.module.css';

const UserForm = () => {
	return (
		<div className={styles.userform}>
			<form method='post'>
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
		</div>
	);
};

export default UserForm;
