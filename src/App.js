import './App.css';
import UserForm from './components/NewUser/UserForm';
import UsersList from './components/Users/UsersList/UsersList';

function App() {
	return (
		<div className='App'>
			<UserForm />

			<UsersList />
		</div>
	);
}

export default App;
