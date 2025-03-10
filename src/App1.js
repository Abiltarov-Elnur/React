import React, { useState } from "react";
import TempInp from "./TempInp"; 
import Verdict from "./Verdict"; 


function Calculator() {
	const [temp, setTemp] = useState(0);
	
	return <div>
		<Verdict temp={temp} />
		<TempInp temp={temp} setTemp={setTemp} 
			/> 
	</div>;
}

export default Calculator