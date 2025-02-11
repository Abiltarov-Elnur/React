import React from 'react';

function App() {
	const str1 = 'text1';
	const str2 = 'text1';
	const name = 'user';
	const age  = '30';
	const arr = [1, 2, 3, 4, 5];
	const obj = {name: 'john', surname: 'smit'};
	const attr = 'block';

	return (<><div>
		<p>{str1}</p>
		<p>{str2}</p>
	</div>
	<div>
		name: {name}
		age: {age}
	</div>
	
	<ul>
		<li>{arr[0]}</li>
		<li>{arr[1]}</li>
		<li>{arr[2]}</li>
		<li>{arr[3]}</li>
		<li>{arr[4]}</li>
	</ul>

	<p>
		name:    <span>{obj.name}</span>, <br />
		surname: <span>{obj.surname}</span>,
	</p>
	
	
	<div id={attr}>
		text
	</div>

	</>
	);
}

export default App;