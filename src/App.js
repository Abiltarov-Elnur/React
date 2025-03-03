import uuid from "react-uuid";

import React, { useState } from 'react';


function App() {
    const [age, setAge] = useState(0);

    function handleChange(event) {
        setAge(event.target.value);
    }

    // Получаем текущий год
    var grs = (age * (9/5)) + 32

    return (
        <div>
            <input 
                type="number" 
                value={age} 
                onChange={handleChange} 
            />
            <p>Градус: {grs}</p>
        </div>
    );
}

export default App;

