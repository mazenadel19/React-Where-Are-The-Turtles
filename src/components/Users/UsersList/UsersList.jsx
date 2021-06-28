import React from 'react';
import Card from '../../Card/Card';
import UserItem from '../UserItem/UserItem';
// import styles from './UsersList.module.css';

const UsersList = () => {
	const users = [
		{ name: 'Mazen', age: 26, id: 1 },
		{ name: 'Mazen', age: 26, id: 2 },
	];

	return (
		<Card>
			<UserItem users={users} />
		</Card>
	);
};

export default UsersList;
