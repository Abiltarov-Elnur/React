import React from "react";

function Product({ name, cost }) {
  return (
    <div>
      <p>
        {name}: {cost}
      </p>
    </div>
  );
}

export default Product;