import { Link ,useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';

function Products() {
    const [products, setProducts] = useState([]);

    //const userId = JSON.parse(localStorage.getItem("username")).id;
    const fetchProductsFromServer = async () => {
        try {
          const response = await fetch(`http://localhost:3001/products`);
          const data = await response.json();
          setProducts(Array.from(data));
        } catch (error) {
          console.error(error);
          alert('An error occurred while fetching products');
        }
      };

      useEffect(() => {
        fetchProductsFromServer();
      }, []);

      const handleAddToCart = async (productId) => {
        try {
          const userId = JSON.parse(localStorage.getItem('username')).id;
          await fetch(`http://localhost:3001/users/${userId}/MyCart`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ productId }),
          });
          alert('Product added to your cart successfully');
        } catch (error) {
          console.error(error);
          alert('An error occurred while adding the product to your cart');
        }
      };

      return (
        <div className='product'>
      <h2>Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.product_id} className="product-item">
            <h3>{product.product_name}</h3>
            <img
              src={`http://localhost:3001/images/${product.product_picture}`}
              alt={product.product_name}
            />
             <button onClick={() => handleAddToCart(product.product_id)}>
              Add to My Cart
            </button>
          </div>
        ))
        }
      </div>
    </div>
  );
  }

export default Products;