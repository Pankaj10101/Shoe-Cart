import React, { useContext } from "react";
import "./Cart.css";
import { Store } from "../../store/context";

const Cart = () => {
  const { cartItem, removeItemFromCart, changeValues } = useContext(Store);

  const totalAmount = cartItem.reduce((acc, item) => acc + item.price*item.quantityS, 0);

  if (cartItem.length === 0) {
    return <div className="container">Your cart is empty.</div>;
  }

  return (
    <div className="container">
      <div className="summ">
        {cartItem.map((item) => (
          <div key={item.id}>
            <div className="item">
              <span className="name">{item.shoeName}</span>
              <span className="description">{item.description}</span>
              <span className="price">${item.price}</span>
              <div>
              <label htmlFor="L">L</label>
              <input
                type="number"
                id="L"
                min={1}
                max={item.quantityL}
                defaultValue={item.quantity}  
                onChange={(e) => {
                  changeValues(item.id, Math.round(e.target.value), item.quantityL);
                }}
              />
              </div>
              <div>
              <label htmlFor="M">M</label>
              <input
                type="number"
                id="M"
                min={1}
                max={item.quantityM}
                defaultValue={item.quantity}  
                onChange={(e) => {
                  changeValues(item.id, Math.round(e.target.value), item.quantityM);
                }}
              />
              </div>
              <div>
              <label htmlFor="S">S</label>
              <input
                type="number"
                id="S"
                min={1}
                max={item.quantityL}
                defaultValue={item.quantity}  
                onChange={(e) => {
                  changeValues(item.id, Math.round(e.target.value), item.quantityS);
                }}
              />
              </div>
              <button
                className="btn"
                onClick={() => {
                  removeItemFromCart(item.id, item.quantity);
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="summary">
        <span>Total Price : ${totalAmount}</span>
      </div>
    </div>
  );
};

export default Cart;
