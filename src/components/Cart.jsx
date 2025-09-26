import React from "react";

const Cart = ({ cartItems, setCartItems }) => {
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
            <span>{item.title} x {item.quantity}</span>
            <span>${item.price * item.quantity}</span>
            <button onClick={() => removeItem(item.id)} style={{ backgroundColor: "#f44336", color: "white", border: "none", padding: "0.3rem 0.5rem", cursor: "pointer", borderRadius: "4px" }}>Remove</button>
          </div>
        ))
      )}
      {cartItems.length > 0 && <h3>Total: ${totalPrice.toFixed(2)}</h3>}
    </div>
  );
};

export default Cart;
