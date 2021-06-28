import React from 'react';
import Card from '../../Card/Card';
import UserItem from '../UserItem/UserItem';
// import styles from './UsersList.module.css';

const UsersList = ({ users, onDeleteUser }) => {
	return (
		<Card>
			<UserItem users={users} onDeleteUser={onDeleteUser} />
		</Card>
	);
};

export default UsersList;
