import uuid from "react-uuid";

import React, { useState } from "react";

function App() {
  const [valueSum, setValueSum] = useState(""); 
  const [valueTip, setValueTip] = useState(""); 

  function handleSum(e) {
    setValueSum(e.target.value);
  }

  function handleTip(e) {
    setValueTip(e.target.value);
  }

  const sum_check = parseFloat(valueSum) || 0;
  const tip = parseFloat(valueTip) || 0;


  const res_tip = (sum_check * tip) / 100;
  const res1 = sum_check + res_tip;

  return (
    <div>
      <h1>Калькулятор Чаевых</h1>
      <div>
        <span>Введите сумму чека:</span>
        <input
          type="number"
          value={valueSum}
          onChange={handleSum}
          placeholder="Введите сумму чека"
        />
      </div>
      <div>
        <span>Введите процент чаевых:</span>
        <input
          type="number"
          value={valueTip}
          onChange={handleTip}
          placeholder="Введите процент"
        />
      </div>
      <div>
        <h3>Чаевые: {res_tip}</h3>
        <h2>Итоговая сумма: {res1}</h2>
      </div>
    </div>
  );
}

export default App;
