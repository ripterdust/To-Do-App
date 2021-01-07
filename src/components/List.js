import React, { useState } from 'react';

// Importing components
import NewTask from './NewTask';
import AllTask from './AllTask';

const List = () => {

	const [ tasks, setTask ] = useState([]);


	return <>
		<div className="newTask"><NewTask setTask={setTask}/></div>
		<div className="allTasks">
			<ul>
				{
					tasks ? tasks.map((elem, i) => (<li key={i}>
						<AllTask data={elem} i={i} setTask={setTask} />
					</li>)) : 'Agrega una nota nueva'
				}	
			</ul>

		</div>
	</>	 

};


export default List;
