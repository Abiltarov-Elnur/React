import React, { useState } from 'react';
import uuid from "react-uuid";

function App() {
	const [name, setName] = useState('Вася');
	const [surn, setSurn] = useState('Левин');
	const [age, setAge] = useState('23');


	return <div>
		<span>{name} </span>
		<span>{surn} </span>
		<span>{age} </span>
		<button onClick={() => setName('ИГоооооорь')} and >нажми, тварь!</button>
	</div>;
}
export default App;
  