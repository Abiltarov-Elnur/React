import React, { useState } from 'react';
import uuid from "react-uuid";

function App() {
	const [count, setCount] = useState(0);
	
	function clickHandler() {
		setCount(count + 1);
	}

	function clickHandler1() {
		setCount(count - 1);
	}
	
	return <div>
		<span>{count}</span>
		<button onClick={clickHandler}>+</button>
		<button onClick={clickHandler1}>-</button>
	</div>;
}

export default App;