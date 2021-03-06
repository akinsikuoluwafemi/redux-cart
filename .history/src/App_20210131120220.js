import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
i
// items
import cartItems from "./cart-items";
// redux stuff
import { createStore } from 'redux';
import reducer from './reducer';

// intial store
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0
}



const store = createStore(reducer, initialStore)





function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
