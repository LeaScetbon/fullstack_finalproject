import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  const fetchProductsFromServer = async () => {
    try {
      const response = await fetch(`http://localhost:3001/products`);
      const data = await response.json();
      setProducts(Array.from(data));
    } catch (error) {
      console.error(error);
      alert("An error occurred while fetching products");
    }
  };

  useEffect(() => {
    fetchProductsFromServer();
  }, []);

  const handleAddToCart = async (productId) => {
    try {
      const userId = JSON.parse(localStorage.getItem("username")).id;
      await fetch(`http://localhost:3001/users/${userId}/MyCart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });
      alert("Product added to your cart successfully");
    } catch (error) {
      console.error(error);
      alert("An error occurred while adding the product to your cart");
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
              src={`pictures/product/${product.product_picture}`}
              alt={product.product_name}
              width="70%"
            />
            <h3>{product.price + "$"}</h3>
            <button onClick={() => handleAddToCart(product.product_id)}>
              Add to My Cart
            </button>
          </div>
        ))}
      </div>
      {userType === "admin" && (
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
                setNewProduct({
                  ...newProduct,
                  product_picture: e.target.value,
                })
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
