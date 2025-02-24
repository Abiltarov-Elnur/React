import React from 'react';

function App() {
	const users = [
		{id: 1, name: 'user1', surn: 'surn1', age: 
			30}, 
		{id: 1, name: 'user2', surn: 'surn2', age: 
			31}, 
		{id: 1, name: 'user3', surn: 'surn3', age: 
			32}, 
	];

	const res = users.map(function(item, index){
		return <ul key = {item.id}>
			<li>{item.name}</li>:
			<li>{item.surn}</li>:
			<li>{item.age}</li>
		</ul>
	});

	return <ul>
		{res}
	</ul>;
}

export default App;