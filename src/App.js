import { useState } from 'react';
import './App.css';
import TurtleForm from './components/NewTurtles/TurtleForm';
import TurtleList from './components/Turtles/TurtlesList/TurtlesList';

function App() {
	const [turtles, setTurtles] = useState([]);

	const AddTurtleHandler = (turtle) => {
		const newTurtle = {
			id: Math.random().toString(),
			...turtle,
		};
		setTurtles((prevTurtle) => {
			return [newTurtle, ...prevTurtle];
		});
	};

	const DeleteTurtleHandler = (id) => {
		setTurtles((prevTurtles) => {
			const updatedTurtles = prevTurtles.filter((turtle) => turtle.id !== id);
			return updatedTurtles;
		});
	};

	let content = <img src='/turtles.gif' alt='' />;
	if (turtles.length > 0)
		content = (
			<TurtleList turtles={turtles} onDeleteTurtle={DeleteTurtleHandler} />
		);

	return (
		<div className='App'>
			<TurtleForm onAddTurtle={AddTurtleHandler} />
			{content}
		</div>
	);
}

export default App;
