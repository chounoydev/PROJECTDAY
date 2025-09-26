import React from "react";

const ProductDetails = ({ product, setCartItems, goBack }) => {
  const addToCart = () => {
    setCartItems(prev => {
      const exists = prev.find(i => i.id === product.id);
      if (exists) return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity+1 } : i);
      else return [...prev, { ...product, quantity: 1 }];
    });
  };

  return (
    <div style={{ padding: "1rem" }}>
      <button onClick={goBack} style={{ marginBottom: "1rem" }}>Back</button>
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} style={{ width: "300px", height: "300px", objectFit: "cover" }} />
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Brand: {product.brand}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <button onClick={addToCart} style={{ backgroundColor: "#28a745", color: "white", padding: "0.5rem", borderRadius: "5px", border: "none", cursor: "pointer" }}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
