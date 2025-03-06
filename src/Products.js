import React, { useState } from "react";
import uuid from "react-uuid";
import Product from "./Product";

function Products() {
	const [prods, setProds] = useState(initProds);
	
	function changeField(id, field, event) {
		setProds(prods.map(prod => {
			if (prod.id === id) {
				prod[field] = event.target.value;
			}
			
			return prod;
		}));
	}
	
	const rows = prods.map(prod => {
		return <Product
			key ={prod.id}
			id  ={prod.id}
			name={prod.name}
			cost={prod.cost}
			catg={prod.catg}
			changeField={changeField}
		/>;
	});
	
	return <div>
		<table>
			<tbody>
				{rows}
			</tbody>
		</table>
	</div>;
}

export default Products;
