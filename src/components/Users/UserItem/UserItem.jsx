import React from 'react';
import styles from './UserItem.module.css';

const UserItem = ({ users, onDeleteUser }) => {
	const renderedlist = users.map((user) => (
		<div
			key={user.id}
			onClick={() => {
				onDeleteUser(user.id);
			}}>
			<div className={styles.user}>
				{user.name} {`(${user.age} years old)`}
			</div>
		</div>
	));

	return <div>{renderedlist}</div>;
};

export default UserItem;
