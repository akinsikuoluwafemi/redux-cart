import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { Provider } from 'react-redux';
// items
import cartItems from "./cart-items";
// redux stuff
import { createStore } from 'redux';
import reducer from './reducer';

// intial store
const initialStore = {
  cart: cartItems,
  total: 1,
  amount: 5
}



const store = createStore(reducer, initialStore);





function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar  />
      <CartContainer  />
    </Provider>
  );
}

export default App;
