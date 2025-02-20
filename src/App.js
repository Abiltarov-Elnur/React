import React from 'react';

function App() {
	const arr = [];
	for (let i = 0; i <= 9; i++){
		arr.push(<li>{i}</li>)
	}
	
	return <ul>
		{arr}
	</ul>;
}

export default App;