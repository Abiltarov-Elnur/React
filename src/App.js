import uuid from "react-uuid";

import React, { useState } from "react";

function App() {
	const [notes, setNotes] = useState([1, 
		2, 3, 4, 5]); 
	

	function doSmth(index) {
		let copy = [...notes];
		copy.splice(index, 1); 
		setNotes(copy);
	}


	const result = notes.map((note, index) => {
		return <li key={index} onClick={() => doSmth(index)}> 
			{note}
		</li>;
	});
	
	return <div>
		<ul>
			{result}
		</ul>
	</div>;
}

export default App;
