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
      console.log(data)
      setCartProducts(Array.from(data));
    } catch (error) {
      console.error(error);
      alert('An error occurred while fetching cart items');
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      const response = await fetch(`http://localhost:3001/users/MyCart/${productId}`, {
        method: 'DELETE',
      });
      console.log(response)
      if (response.ok) {
    
        setCartProducts((prevCartProducts) =>
          prevCartProducts.filter((product) => product.product_id !== productId)
        );
      } else {
        alert('Failed to delete the product from the cart.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while deleting the product from the cart.');
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
             <button onClick={() => handleDeleteProduct(product.product_id)}>
              Delete
            </button>
          </div>
        ))}
        
      </div>
    </div>
  );
  }

  export default MyCart;