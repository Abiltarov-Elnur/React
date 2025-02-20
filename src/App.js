import React from 'react';

function App() {
	function func(arg, arg2, event) {
		console.log(arg, arg2, event);
	}
	
	return <div>
		<button onClick={event => func('eee', 'ggg', 
			event)}>act</button> 
	</div>;
}

export default App;