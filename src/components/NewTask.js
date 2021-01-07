import React, {useState} from 'react';


const NewTask = ({setTask}) => {
	
	const [inputValue, setInputValue] = useState('');

	const newTask = (e) => {
		e.preventDefault();
		setTask(task => [inputValue, ...task]);
		setInputValue('');
	}
	
	const inputData = e => {
		setInputValue(e.target.value);
	}

	return <>
		<form action="" onSubmit={newTask} className="form">
			<input type="text" placeholder="Crear una nueva tarea" value={inputValue} onChange={inputData}/>
		</form>
	</>
}

export default NewTask;
