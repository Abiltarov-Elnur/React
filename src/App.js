import uuid from "react-uuid";

import React, { useState } from 'react';


function App() {
	const [value, setValue] = useState('');
	
	function handleChange(event) {
		setValue(event.target.value);
	}
	
	return <div>
		<select value={value} onChange={handleChange}>
			<option>Moscow</option>
			<option>Dzankoy</option>
			<option>Simf</option>
			<option>Zarechnoyes</option>
		</select>
		<p>
			ваш выбор: {value}
		</p>
	</div>;
}
export default App;

