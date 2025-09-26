import React from "react";

const Checkout = ({ cartItems, setCartItems, goBack }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price*item.quantity, 0);

  const handleCheckout = () => {
    alert("Checkout successful!");
    setCartItems([]);
    goBack();
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Checkout</h2>
      {cartItems.length === 0 ? <p>Cart is empty</p> : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} style={{ display: "flex", justifyContent: "space-between" }}>
              <span>{item.title} x {item.quantity}</span>
              <span>${item.price*item.quantity}</span>
            </div>
          ))}
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button onClick={handleCheckout} style={{ marginTop: "1rem", backgroundColor: "#007bff", color: "white", padding: "0.5rem", border: "none", borderRadius: "5px", cursor: "pointer" }}>Confirm Checkout</button>
        </div>
      )}
      <button onClick={goBack} style={{ marginTop: "1rem" }}>Back</button>
    </div>
  );
};

export default Checkout;
