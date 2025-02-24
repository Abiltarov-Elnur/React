import React, { useState } from 'react';
import uuid from "react-uuid";

function App() {
	const [ban, setBan] = useState(false);


	return <div>
		<span> {ban ? 'БАН' : 'РАЗБАН'}</span>
		<button onClick={() => setBan(true)}>нажми, тварь!</button>
		<button onClick={() => setBan(false)}>нажми, тварь!</button>
	</div>;

}
export default App;
  