import React, { useState } from 'react';
import uuid from "react-uuid";

function App() {
	const [value1, setValue1] = useState('');
	const [value, setValue] = useState('');
	
	function handleChange(event) {
		setValue(event.target.value);  
	}

	function handleChange1(event) {
		setValue1(event.target.value);  
	}
	
	return <div>
		<input value={value} onChange={handleChange} 
			/> 
		<input value={value1} onChange={handleChange1} 
			/> 
		<p>text: {value}</p>
		<p>text: {value1}</p>
	</div>;
}

export default App;