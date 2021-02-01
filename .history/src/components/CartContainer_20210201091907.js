import React from "react";
import CartItem from "./CartItem";
import { connect } from 'react-redux';
import { CLEAR_CART, clearCart, removeItem } from '../actions';




const CartContainer = ({ cart = [], total , dispatch }) => {
  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map(item => {
          return <CartItem key={item.id} {...item} removeItem={removeItem} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${ total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => clearCart() } >clear cart</button>
      </footer>
    </section>
  );
};

const mapStateToProps = (state) => {
  console.log(state.cart)
  return {
    cart: state.cart,
    total: state.total
  }
}

export default connect(mapStateToProps, {clearCart, removeItem}) (CartContainer);
