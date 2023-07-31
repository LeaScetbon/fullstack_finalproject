import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function MyCart() {
  const [cartProducts, setCartProducts] = useState([]);
  const userId = JSON.parse(localStorage.getItem('username')).id;

  const navigate = useNavigate();

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
  
  const handleUpdateQuantity = async (productId, quantity) => {
    try {
      await fetch(`http://localhost:3001/users/${userId}/MyCart/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity }),
      });
      fetchCartProductsFromServer(); 
    } catch (error) {
      console.error(error);
      alert('Error updating the quantity: ' + error.message);
    }
  };

  const handlePayment = () => {
    navigate('/PaymentDetails');
  };


  useEffect(() => {
    fetchCartProductsFromServer();
  }, []);
  
  const getTotalPrice = () => {
    let totalPrice = 0;
    for (const product of cartProducts) {
      totalPrice += product.price * product.quantity;
    }
    return totalPrice;
  };

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
              <h3>{product.price*product.quantity.toFixed(2) + '$'}</h3>
              <div>
                <h3>Quantity:</h3>
                <input
                  type='number'
                  value={product.quantity}
                  onChange={(e) =>
                    handleUpdateQuantity(product.product_id, e.target.value)
                  }
                  min='1'
                />
              </div>
              <button onClick={() => handleDeleteProduct(product.product_id, userId)}>
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No items in the cart.</p>
        )}
      </div>
      <div className='total-price'>
          <h3>Total Price: ${getTotalPrice().toFixed(2)}</h3>
        </div>
        <div className='payment'>
          <button onClick={handlePayment}>Pay Now</button>
        </div>
    </div>
  );
}

export default MyCart;