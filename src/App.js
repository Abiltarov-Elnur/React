import uuid from "react-uuid";

import React, { useState } from "react";

function App() {
	const [notes, setNotes] = useState([1, 
		2, 3, 4, 5]); 
	
	const result = notes.map((note, index) => {
		return <li key={index}>{note}</li>;
	});
	

	function clk(){
		const newNumber = notes.length + 1; 
    	setNotes([...notes, newNumber]);
	}


	return <div>
		<ul>
			{result}
		</ul>
		<button
		onClick={clk}


		>добавь число</button>
	</div>;
}

export default App;
