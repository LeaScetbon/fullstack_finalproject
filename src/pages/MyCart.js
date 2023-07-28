//import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';

function MyCart() {
  const [cartProducts, setCartProducts] = useState([]);
  
  const fetchCartProductsFromServer = async () => {
    try {
      const userId = JSON.parse(localStorage.getItem('username')).id;
      const response = await fetch(`http://localhost:3001/users/${userId}/mycart`);
      const data = await response.json();
      setCartProducts(Array.from(data));
    } catch (error) {
      console.error(error);
      alert('An error occurred while fetching cart items');
    }
  };
  useEffect(() => {
    fetchCartProductsFromServer();
  }, []);

  return (
    <div className='my-cart'>
      <h2>My Cart</h2>
      <div className='cart-items'>
        {cartProducts.map((product) => (
          <div key={product.product_id} className='cart-item'>
            <h3>{product.product_name}</h3>
            <img
              src={`http://localhost:3001/images/${product.product_picture}`}
              alt={product.product_name}
            />
          </div>
        ))}
      </div>
    </div>
  );
  }

  export default MyCart;