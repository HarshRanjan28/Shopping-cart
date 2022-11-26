import React, { useContext } from "react";
import Items from "./Items";
import { CartContext } from "./Cart";
const ContextCart = () => {
  const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);

  if (item.length === 0) {
    return (
      <>
        <header>
          <div className="continue-shopping">
            <img
              src="https://github.com/thapatechnical/addtocartreact/blob/main/public/images/arrow.png?raw=true"
              alt="arrow"
              className="arrow-icon"
            />
            <h3>continue shopping</h3>
          </div>
          <div className="cart-icon">
            <img
              src="https://github.com/thapatechnical/addtocartreact/blob/main/public/images/cart.png?raw=true"
              alt="cart"
            />
            <p>{totalItem}</p>
          </div>
        </header>
        <section className="main-cart-section">
          <h1>Shopping Cart</h1>
          <p className="total-items">
            you have <span>{totalItem}</span> items in shopping cart
          </p>
        </section>
      </>
    );
  }

  return (
    <>
      <header>
        <div className="continue-shopping">
          <img
            src="https://github.com/thapatechnical/addtocartreact/blob/main/public/images/arrow.png?raw=true"
            alt="arrow"
            className="arrow-icon"
          />
          <h3>continue shopping</h3>
        </div>
        <div className="cart-icon">
          <img
            src="https://github.com/thapatechnical/addtocartreact/blob/main/public/images/cart.png?raw=true"
            alt="cart"
          />
          <p>2</p>
        </div>
      </header>
      <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p className="total-items">
          you have <span></span> items in shopping cart
        </p>
        <div className="cart-items">
          <div className="eachCard">
            {item.map((curItem) => {
              return <Items key={curItem.id} {...curItem} />;
            })}
          </div>
        </div>
        <div className="cart-total">
          <h3>
            Cart Total : <span>{totalAmount}</span>
          </h3>
          <button>Checkout</button>
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </section>
    </>
  );
};

export default ContextCart;
