import React, { useState } from "react";
import uuid from "react-uuid";
import Product from "./Product";

function Products() {
  const initProds = [
    { id: uuid(), name: "po1", cost: "123" },
    { id: uuid(), name: "po2", cost: "12343433" },
  ];

  const [prods, setProds] = useState(initProds);

  return (
    <div>
      {prods.map((prod) => (
        <Product 
        id  ={prod.id}
        key={prod.id}
        name={prod.name} 
        cost={prod.cost} />
      ))}
    </div>
  );
}

export default Products;
