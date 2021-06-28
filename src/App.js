import { useState } from 'react';
import './App.css';
import UserForm from './components/NewUser/UserForm';
import UsersList from './components/Users/UsersList/UsersList';

function App() {
	const [users, setUsers] = useState([]);

	const AddUsersHandler = (user) => {
		console.log(user);
		const newUser = {
			id: Math.random().toString(),
			...user,
		};
		setUsers((prevUsers) => {
			return [newUser, ...prevUsers];
		});
	};

	const DeleteUserHandler = (id) => {
		console.log(id);
		setUsers((prevUsers) => {
			const updatedUsers = prevUsers.filter((user) => user.id !== id);
			return updatedUsers;
		});
	};

	let content = <img src='/turtles.gif' alt='' />;
	if (users.length > 0)
		content = <UsersList users={users} onDeleteUser={DeleteUserHandler} />;

	return (
		<div className='App'>
			<UserForm onAddUser={AddUsersHandler} />
			{content}
		</div>
	);
}

export default App;
