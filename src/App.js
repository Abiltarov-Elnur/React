import React from 'react';

function App() {
	let text;
	const isAdult = 18

	if(isAdult > 17){
		text = <p>text1</p>
	}else{
		text = <p>text2</p>
	}
 
	return text
}

export default App;