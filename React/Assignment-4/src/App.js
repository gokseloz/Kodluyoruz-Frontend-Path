import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { products } from "./constants";
import ProductsGrid from "./components/ProductsGrid";

const App = () => {
  const [carts, setCarts] = useState({
    cart: [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
    itemCount: 0,
  });

  const handleIncrement = (product) => {
    // creating copy of cart array
    const cart = [...carts.cart];
    // find the index of the product that comes as a parameter in the cart array
    const index = cart.indexOf(product);
    // add this product to this copied cart array and increase its value property by 1
    cart[index] = { ...cart[index] };
    cart[index].value++;
    // find the number of items in the cart using the getItemCount function
    const itemCount = getItemCount(cart);
    // update the state
    setCarts({ cart, itemCount });
  };

  const handleDecrement = (product) => {
    const cart = [...carts.cart];
    const index = cart.indexOf(product);
    cart[index] = { ...cart[index] };
    cart[index].value--;
    const itemCount = getItemCount(cart);
    setCarts({ cart, itemCount });
  };

  const getItemCount = (cart) => {
    // Find the total number of items in the cart
    let itemCount = cart.reduce((total, product) => total + product.value, 0);

    return itemCount;
  };

  return (
    <div className="App">
      <Navbar totalItems={carts.itemCount} />
      <ProductsGrid
        products={products}
        cart={carts.cart}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
};

export default App;
