import uuid from "react-uuid";

import React, { useState } from 'react';


function App() {
	const [checked, setChecked] = useState(true);
    const [checked1, setChecked1] = useState(true);
    const [checked2, setChecked2] = useState(true);
	
	return <div>
        <p>HTML:</p>
		<input type="checkbox" checked={checked} 
			onChange={() => setChecked(!checked)} /> 
        <p>CSS:</p>
		<input type="checkbox" checked1={checked} 
			onChange={() => setChecked1(!checked)} /> 
        <p>JS:</p>
		<input type="checkbox" checked2={checked} 
			onChange={() => setChecked2(!checked)} /> 
	</div>;
}

export default App;

