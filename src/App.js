import React from 'react';

function App() {
	function getDigitsSum(num){
		if (typeof num === 'number'){
			num = num.toString();
		}
		var del = num.length;

		var summ = 0;
		for (let i = 0; i < del; i++){
			summ += parseInt(num[i], 10);
		}

		return summ
	}

	var sum = getDigitsSum(1233435234987237244)

	return <div>
		{sum}
	</div>
}

export default App;