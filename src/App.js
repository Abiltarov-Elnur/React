import uuid from "react-uuid";

import React, { useState } from 'react';

function App() {
    const [value, setValue] = useState(''); // Состояние для хранения значения инпута

    function handleChange(event) {
        setValue(event.target.value); // Обновляем состояние при вводе текста
    }

    return (
        <div>
            <input
                type="text"
                value={value} // Значение инпута привязано к состоянию
                onChange={handleChange} // Обработчик изменений
            />
            <p>Количество символов: {value.length}</p> {/* Выводим длину введенного текста */}
        </div>
    );
}

export default App;

