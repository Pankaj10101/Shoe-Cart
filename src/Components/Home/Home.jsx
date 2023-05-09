import React, { useContext, useState } from "react";
import "./Home.css";
import { Store } from "../../store/context";

function ProductList() {
  const { item, updateCart } = useContext(Store);
  const [quantityL, setQuantityL] = useState(1);
  const [quantityM, setQuantityM] = useState(1);
  const [quantityS, setQuantityS] = useState(1);
  return (
    <div className="product-list-container">
      <h2>Product List</h2>
      <ul className="product-list">
        {item.map((product) => (
          <li key={product.id} className="product-item">
            <div className="product-info">
              <h3 className="product-name">{product.medicineName}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">Price: {product.price}$</p>
              <p className="product-quantity">
                Quantity Available : 
                L:
                {product.quantityL > 0
                  ? `${product.quantityL}    `
                  : "OUT OF STOCK"}  
                    M:
                {product.quantityM > 0
                  ? `${product.quantityM}    `
                  : "OUT OF STOCK"}
                  S:
                {product.quantityS > 0
                  ? `${product.quantityS}    `
                  : "OUT OF STOCK"}
              </p>
              <p>              Select Quantity:</p>
              <div className="product-quantity">
  
                <div className="quant">
                  <label htmlFor="L">L</label>
                  <input
                    type="number"
                    id="L"
                    value={quantityL}
                    min={1}
                    max={product.quantityL}
                    onChange={(event) =>
                      setQuantityL(Number(event.target.value))
                    }
                  />
                  <button
                    className={`add-to-cart-button ${
                      product.quantityL < 1 ? " disabled" : ""
                    }`}
                    disabled={product.quantityL < 1}
                    onClick={() => {
                      updateCart(
                        product.id,
                        product,
                        quantityL,
                        'L'
                      );
                    }}
                  >
                    BUY
                  </button>
                </div>
                <div className="quant">
                  <label htmlFor="M">M</label>
                  <input
                    type="number"
                    id="M"
                    value={quantityM}
                    min={1}
                    max={product.quantityM}
                    onChange={(event) =>
                      setQuantityM(Number(event.target.value))
                    }
                  />
                  <button
                    className={`add-to-cart-button ${
                      product.quantityM < 1 ? " disabled" : ""
                    }`}
                    disabled={product.quantityM < 1}
                    onClick={() => {
                      updateCart(
                        product.id,
                        product,
                        quantityM,
                        'M'
                      );
                    }}
                  >
                    BUY
                  </button>
                </div>
                <div className="quant">
                  <label htmlFor="S">S</label>
                  <input
                    type="number"
                    id="S"
                    value={quantityS}
                    min={1}
                    max={product.quantityS}
                    onChange={(event) =>
                      setQuantityS(Number(event.target.value))
                    }
                  />
                  <button
                    className={`add-to-cart-button ${
                      product.quantityS < 1 ? " disabled" : ""
                    }`}
                    disabled={product.quantityS < 1}
                    onClick={() => {
                      updateCart(
                        product.id,
                        product,
                        quantityS,
                        'S'
                      );
                    }}
                  >
                    BUY
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
