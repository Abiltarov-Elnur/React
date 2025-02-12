import React from 'react';

function App() {
	let text;
	const isAdult = 18
	const age = 19;
	const isAuth = true;

	if(isAdult > 17){
		text = <p>text1</p>
	}else{
		text = <p>text2</p>
	}


 
	return (
	<>
		<div>
			{age > 18 ? <p>adult</p> : <p>young</p>}
		</div>

		<div>
			{!isAuth && <p>text1</p>}
		</div>
	</>
	);

}

export default App;