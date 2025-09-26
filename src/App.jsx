import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [view, setView] = useState("home"); // "home" | "details" | "checkout"
  const [selectedProduct, setSelectedProduct] = useState(null);

  const goToDetails = (product) => {
    setSelectedProduct(product);
    setView("details");
  };

  const goToCheckout = () => setView("checkout");
  const goHome = () => setView("home");

  return (
    <div>
      <Header cartItems={cartItems} goToCheckout={goToCheckout} goHome={goHome} />
      <Cart cartItems={cartItems} setCartItems={setCartItems} />
      {view === "home" && <Home goToDetails={goToDetails} cartItems={cartItems} setCartItems={setCartItems} />}
      {view === "details" && selectedProduct && (
        <ProductDetails product={selectedProduct} setCartItems={setCartItems} goBack={goHome} />
      )}
      {view === "checkout" && <Checkout cartItems={cartItems} setCartItems={setCartItems} goBack={goHome} />}
    </div>
  );
}

export default App;
