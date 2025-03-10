import React, { useState } from "react";

function TempInp({ temp, setTemp }) {
    return (
      <div>
        <label>
          Введите температуру:
          <input
            type="number"
            value={temp}
            onChange={(e) => setTemp(Number(e.target.value))}
          />
        </label>
      </div>
    );
  }

  export default TempInp;