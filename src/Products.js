import React, { useState } from "react";
import uuid from "react-uuid";
import Product from "./Product";

function Products() {
  const initProds = [
    { id: uuid(), name: "po1", cost: "123" },
    { id: uuid(), name: "po2", cost: "12343433" },
  ];

  const [prods, setProds] = useState(initProds);

  function addToCart(id) {
    setProds(prods.map(prod => {
        if (prod.id === id) {
            prod.inCart = true;
        }
        
        return prod;
    }));
}

const items = prods.map(prod => {
    return <Product
        key      ={prod.id}
        id       ={prod.id}
        name     ={prod.name}
        cost     ={prod.cost}
        inCart   ={prod.inCart}
        addToCart={addToCart}
    />;
});

return <div>
    {items}
</div>;
}

export default Products;
