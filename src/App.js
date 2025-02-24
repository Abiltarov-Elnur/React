import React from 'react';
import uuid from "react-uuid";

function App() {
	const users = [
		{id: uuid(), name: 'user1', surn: 'surn1', 
			age: 30}, 
		{id: uuid(), name: 'user2', surn: 'surn2', 
			age: 31}, 
		{id: uuid(), name: 'user3', surn: 'surn3', 
			age: 32}, 
	];

	const iser = users.map(function(item){
		return <tr key={item.id}>
			<td>{item.name}</td>
			<td>{item.surn}</td>
		</tr>
	});

	return <table>
		<thead>
			<tr>
				<td>header</td>
			</tr>
		</thead>
		<tbody>
			{iser}
		</tbody>
	</table>
}

export default App;