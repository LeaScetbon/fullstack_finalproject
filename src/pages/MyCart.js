import React, { useState, useEffect } from 'react';


function MyCart() {
  const [cartProducts, setCartProducts] = useState([]);
  const userId = JSON.parse(localStorage.getItem('username')).id;

  

  const fetchCartProductsFromServer = async () => {
    try {
      const response = await fetch(`http://localhost:3001/users/${userId}/MyCart`);
      const data = await response.json();
      setCartProducts(data);
    } catch (error) {
      console.error(error);
      alert('An error occurred while fetching cart items');
    }
  };

  const handleDeleteProduct = async (productId, userId) => {
    try {
      const response = await fetch(`http://localhost:3001/users/${userId}/MyCart/${productId}`, {
        method: 'DELETE',
      });

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
        {cartProducts && cartProducts.length > 0 ? (
          cartProducts.map((product) => (
            <div key={product.product_id} className='cart-item'>
              <h3>{product.product_name}</h3>
              <img
                src={`http://localhost:3001/images/${product.product_picture}`}
                alt={product.product_name}
              />
              <h3>{product.price + '$'}</h3>
              <h3>Quantity: {product.quantity}</h3>
              <button onClick={() => handleDeleteProduct(product.product_id, userId)}>
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No items in the cart.</p>
        )}
      </div>
    </div>
  );
}

export default MyCart;