import React from 'react';

function App() {

	function me(text){
		alert(text);
	}

	return <div>
		<button onClick={() => me('number 1')}>act1</button>
		<button onClick={() => me('number 2')}>act2</button>
		<button onClick={() => me('number 3')}>act3</button>
	</div>;
}

export default App;