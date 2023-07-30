import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Products() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    product_name: '',
    product_picture: '',
    price: '',
    brand: '',
    description: '',
    colors: '',
    in_stock: '',
    weight: '',
  });
  const [userType, setUserType] = useState('');
  const [addedProducts, setAddedProducts] = useState([]);

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
    const user = JSON.parse(localStorage.getItem('username'));
    if (user && user.usertype) {
      setUserType(user.usertype);
    }
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

  const handleAddProduct = async (event) => {
    event.preventDefault();
    const colorsArray = newProduct.colors.split(",").map((color) => color.trim());
    newProduct.colors = colorsArray;

    for (const key in newProduct) {
      if (newProduct.hasOwnProperty(key) && newProduct[key] === '') {
        alert('Please fill in all the required fields');
        return;
      }
    }

    try {
      const response = await fetch('http://localhost:3001/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        // Product added successfully
        alert('Product added successfully');

        setAddedProducts((prevAddedProducts) => [...prevAddedProducts, newProduct]);

        setNewProduct({
          product_name: '',
          product_picture: '',
          price: '',
          brand: '',
          description: '',
          colors: '',
          in_stock: '',
          weight: '',
        });
      } else {
        alert('Failed to add product');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while adding the product');
    }
  };

  return (
    <div className="product">
      <h2>Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.product_id} className="product-item">
            <h3>{product.product_name}</h3>
            <img
              src={`http://localhost:3001/images/${product.product_picture}`}
              alt={product.product_name}
            />
            <h3>{product.price + '$'}</h3>
            <button onClick={() => handleAddToCart(product.product_id)}>
              Add to My Cart
            </button>
          </div>
        ))}
        {addedProducts.map((product) => (
          <div key={product.product_id} className="product-item">
            <h3>{product.product_name}</h3>
            <img
              src={`http://localhost:3001/images/${product.product_picture}`}
              alt={product.product_name}
            />
            <h3>{product.price + '$'}</h3>
            <button onClick={() => handleAddToCart(product.product_id)}>
              Add to My Cart
            </button>
          </div>
        ))}
      </div>
      {userType === 'admin' && (
        <div className="add-product-form">
          <h3>Add a New Product</h3>
          <form onSubmit={handleAddProduct}>
            <input
              type="text"
              placeholder="Product Name"
              value={newProduct.product_name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, product_name: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Product Picture URL"
              value={newProduct.product_picture}
              onChange={(e) =>
                setNewProduct({ ...newProduct, product_picture: e.target.value })
              }
              required
            />
            <input
              type="number"
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Brand"
              value={newProduct.brand}
              onChange={(e) =>
                setNewProduct({ ...newProduct, brand: e.target.value })
              }
              required
            />
            <textarea
              placeholder="Description"
              value={newProduct.description}
              onChange={(e) =>
                setNewProduct({ ...newProduct, description: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Colors"
              value={newProduct.colors}
              onChange={(e) =>
                setNewProduct({ ...newProduct, colors: e.target.value })
              }
              required
            />
            <label>
              In Stock:
              <input
                type="checkbox"
                checked={newProduct.in_stock}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, in_stock: e.target.checked })
                }
                required
              />
            </label>
            <input
              type="number"
              placeholder="Weight"
              value={newProduct.weight}
              onChange={(e) =>
                setNewProduct({ ...newProduct, weight: e.target.value })
              }
              required
            />
            <button type="submit">Add Product</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Products;