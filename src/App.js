import uuid from "react-uuid";

import React, { useState } from "react";

function App() {
	const [value, setValue] = useState(1);
	
	function changeHandler(event) {
		setValue(event.target.value);
	}

	const res = ''

	function changeHandler1(event) {
		setValue(event.target.value);
		if (value == 'true'){
			res = 'cool!'
		}
	}
	
	return <div>
		<p>HTML {res}</p>
		<input
			type="radio"
			name="radio"
			value="1"
			checked={value === '1' ? true 
				: false} 
			onChange={changeHandler1}
		/>
		<p>CSS</p>
		<input
			type="radio"
			name="radio"
			value="2"
			checked={value === '2' ? true 
				: false} 
			onChange={changeHandler}
		/>
	</div>
}

export default App;
