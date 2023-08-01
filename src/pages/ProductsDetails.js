import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails({ match }) {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
 
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3001/products/${productId}`);
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
        } else {
          console.error("Failed to fetch product details");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      <h2>{product.product_name}</h2>
      <img src={product.product_picture} alt={product.product_name} />
      <p>Price: {product.price}$</p>
      <p>Brand: {product.brand}</p>
      <p>Description: {product.description}</p>
      <p>Colors: {product.colors.join(", ")}</p>
      <p>In Stock: {product.in_stock ? "Yes" : "No"}</p>
      <p>Weight: {product.weight}</p>
    </div>
  );
}

export default ProductDetails;