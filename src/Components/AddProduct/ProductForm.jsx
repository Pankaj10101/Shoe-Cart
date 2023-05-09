import React, { useContext, useState } from "react";
import "./ProductForm.css";
import { Store } from "../../store/context";

function ProductForm() {
  const [shoeName, setShoeName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantityL, setQuantityL] = useState("");
  const [quantityM, setQuantityM] = useState("");
  const [quantityS, setQuantityS] = useState("");

  const { item, updateItems } = useContext(Store);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      shoeName !== "" &&
      description !== "" &&
      price !== "" &&
      quantityL !== "" &&
      quantityM !== "" &&
      quantityS !== ""
    ) {
      updateItems([
        ...item,
        {
          id: Math.floor(Math.random() * 100000),
          shoeName,
          description,
          price,
          quantityL,
          quantityM,
          quantityS,
        },
      ]);
      setShoeName("");
      setDescription("");
      setPrice("");
      setQuantityL("");
      setQuantityM("");
      setQuantityS("");
    } else {
      alert("Fill All Fields");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="shoeName">Shoe Name:</label>
          <input
            type="text"
            id="shoeName"
            value={shoeName}
            onChange={(event) => setShoeName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <div className="form-group">
          <div className="quantity-heading">Quantity Available:</div>
          <div className="quantity-items">
            <div className="quantity-item">
              <label htmlFor="L">L</label>
              <input
                type="number"
                id="L"
                min={0}
                value={quantityL}
                onChange={(event) => setQuantityL(event.target.value)}
              />
            </div>
            <div className="quantity-item">
              <label htmlFor="M">M</label>
              <input
                type="number"
                id="M"
                min={0}
                value={quantityM}
                onChange={(event) => setQuantityM(event.target.value)}
              />
            </div>
            <div className="quantity-item">
              <label htmlFor="S">S</label>
              <input
                type="number"
                id="S"
                min={0}
                value={quantityS}
                onChange={(event) => setQuantityS(event.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm