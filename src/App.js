import React from 'react';
import Product from './Product'; 

function App() {

  function Product({ name, post }) {
    return <p>
      name: <span>{name}</span>,
      post: <span>{post}</span>
    </p>;
  }

	return <div>
		<Product name="Elnur" post="CEO" />
		<Product name="Edem" post="Manager" />
		<Product name="Vilen" post="Seller" />
	</div>;
}

export default App;