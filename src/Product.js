import React, { useState } from "react";

function Product({ id, name, cost, 
	inCart }) { 

    const [ban, setBan] = useState(false);

	return <div>
		name: <span>{name}</span>,
		cost: <span>{cost}</span>,
        <button
        onClick={() => setBan(!ban)}
        >
        {ban ? "Разбанить" : "Забанить"}
        </button>
		
	</div>;
}

export default Product;
