import uuid from "react-uuid";

import React, { useState } from 'react';


function App() {
	const [checked, setChecked] = useState(true);
    const [checked1, setChecked1] = useState(true);
    const [checked2, setChecked2] = useState(true);
	

	let mes;
	if(checked){
		mes = <p>Ура вам есть 18!</p>

	}else{
		mes = <p>Пошел вон!</p>
	}


	return <div>
        <p>Тебе есть 18?</p>
		<input type="checkbox" checked={checked} 
			onChange={() => setChecked(!checked)} /> 
        <p>{mes}</p>
	</div>;
}

export default App;

