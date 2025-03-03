import uuid from "react-uuid";

import React, { useState } from 'react';


function App() {
    const [val1, setNum1] = useState("");
    const [val2, setNum2] = useState("");
    const [val3, setNum3] = useState("");
    const [val4, setNum4] = useState("");
    const [val5, setNum5] = useState("");

    function handleChange1(event) {
        setNum1(+event.target.value);
    }
    function handleChange2(event) {
        setNum2(+event.target.value);
    }
    function handleChange3(event) {
        setNum3(+event.target.value);
    }
    function handleChange4(event) {
        setNum4(+event.target.value);
    }
    function handleChange5(event) {
        setNum5(+event.target.value);
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
            <input 
                type="number" 
                value={val3} 
                onChange={handleChange3} 
            />
            <input 
                type="number" 
                value={val4} 
                onChange={handleChange4} 
            />
            <input 
                type="number" 
                value={val5} 
                onChange={handleChange5} 
            />
            <p>Res: {(val1+val2+val3+val4+val5)/5}</p>
        </div>
    );
}

export default App;

