import React, { useState } from "react";

function Verdict({ temp }) {
    return (
      <div>
        {temp >= 100 ? "Вода кипит" : "Вода не кипит"}
      </div>
    );
  }

export default Verdict