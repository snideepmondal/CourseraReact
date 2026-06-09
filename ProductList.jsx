import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const products = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 10,
    image: "https://via.placeholder.com/100"
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 15,
    image: "https://via.placeholder.com/100"
  },
  {
    id: 3,
    name: "Money Plant",
    price: 12,
    image: "https://via.placeholder.com/100"
  },
  {
    id: 4,
    name: "Peace Lily",
    price: 20,
    image: "https://via.placeholder.com/100"
  },
  {
    id: 5,
    name: "Spider Plant",
    price: 14,
    image: "https://via.placeholder.com/100"
  },
  {
    id: 6,
    name: "Areca Palm",
    price: 25,
    image: "https://via.placeholder.com/100"
  }
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Indoor Plants</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{ border: "1px solid #ccc", padding: "10px" }}
          >
            <img src={product.image} alt={product.name} width="100" />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>

            <button onClick={() => dispatch(addItem(product))}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
