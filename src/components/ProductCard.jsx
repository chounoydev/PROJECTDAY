import React from "react";

const ProductCard = ({ product, goToDetails, setCartItems, cartItems }) => {
  const addToCart = () => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      setCartItems(cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "1rem", width: "200px" }}>
      <img src={product.thumbnail} alt={product.title} style={{ width: "100%", height: "150px", objectFit: "cover", cursor: "pointer" }} onClick={() => goToDetails(product)} />
      <h3 style={{ cursor: "pointer" }} onClick={() => goToDetails(product)}>{product.title}</h3>
      <p>${product.price}</p>
      <p>Rating: {product.rating}</p>
      <button onClick={addToCart} style={{ backgroundColor: "#28a745", color: "white", border: "none", padding: "0.5rem", width: "100%", cursor: "pointer", borderRadius: "5px" }}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
