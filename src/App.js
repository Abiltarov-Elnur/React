import React, { useState } from 'react';
import uuid from "react-uuid";

function App() {
	const [name, setName] = useState('name1');
	const [surn, setSurn] = useState('surn');
	const [age, setAge] = useState('age');


	return <div>
		<span>{name} </span>
		<span>{surn} </span>
		<span>{age} </span>
	</div>;
}
export default App;
  