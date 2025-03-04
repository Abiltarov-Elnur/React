import uuid from "react-uuid";

import React, { useState } from "react";

function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5, 6, 7, 8]); 
	
	const lengh = notes.length;


	function getSum(arr) {
		return arr.reduce((acc, num) => acc + Number(num), 0); }


	function changeHandler(index, event) {
		setNotes([...notes.slice(0, index), 
			event.target.value, ...notes.slice(index + 1)]); 
	}
	
	const result = notes.map((note, index) => {
		return <input
			key={index}
			value={note}
			onChange={event => changeHandler(index, event)} 
		/>;
	});
	
	return <div>
		{result}
		{getSum(notes)/lengh}
	</div>;
}

export default App;
