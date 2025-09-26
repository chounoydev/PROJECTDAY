import React from "react";

const Header = ({ cartItems, goToCheckout, goHome }) => {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: "1rem", backgroundColor: "#333", color: "white" }}>
      <h1 style={{ cursor: "pointer" }} onClick={goHome}>My Shop</h1>
      <button onClick={goToCheckout} style={{ backgroundColor: "#f0ad4e", border: "none", padding: "0.5rem 1rem", borderRadius: "5px", cursor: "pointer" }}>
        Cart ({cartItems.length})
      </button>
    </header>
  );
};

export default Header;
