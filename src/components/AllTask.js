import React from 'react';

const AllTask = ({data, i, setTask}) => {
	
	const deleteTask = () => {


		setTask(data => {
			let array = data;
			let nestedArray = array.filter(e => e!== array[i]);
			setTask(array.length <= 0 ? [] : nestedArray);
		});

	};

	return <>
		<div className="task">
			<i className="fas fa-tasks"></i>
			<span className="task">{data}</span>
			<button onClick={deleteTask} className="btn">
				<i className="fas fa-trash-alt"></i>
			</button>

		</div>	
	</>
}

export default AllTask;



