import uuid from "react-uuid";

import React, { useState } from 'react';


function App() {
    const [val1, setNum1] = useState("");
    const [val2, setNum2] = useState("");
    const [val3, setNum3] = useState("");
    const [val4, setNum4] = useState("");

    function handleChange1(event) {
        setNum1(+event.target.value);
    }
    function handleChange2(event) {
        setNum2(+event.target.value);
    }
    function handleChange3(event) {
        setNum3(Number(val1) + Number(val2));
    }
    function handleChange4(event) {
        setNum3(Number(val1) * Number(val2));
    }

    // Получаем текущий год
    
    return (
        <div>
            <input 
                type="number" 
                value={val1} 
                onChange={handleChange1} 
            />
            <input 
                type="number" 
                value={val2} 
                onChange={handleChange2} 
            />
            <button onClick={handleChange3}></button>
            <button onClick={handleChange4}></button>
            <p>Res: {val3}{val4}</p>
        </div>
    );
}

export default App;

