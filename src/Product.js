import React from "react";

function Product({ name, cost }) {
  return (
    <div>
      <p>
        <strong>{name}</strong>: {cost} руб.
      </p>
    </div>
  );
}

export default Product;
