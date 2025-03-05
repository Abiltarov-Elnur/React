import uuid from "react-uuid";
import React from 'react';
import Product from './Product'; 

function App() {
	const props = [
    {id: uuid(), name: 'po1', cost: '123'},
    {id: uuid(), name: 'po2', cost: '12343433'},
  ]
	
	return <div>
		<Product name={props[0].name} cost={props[0].cost} />
		<Product name={props[1].name} cost={props[1].cost} />
	</div>;
}

export default App;