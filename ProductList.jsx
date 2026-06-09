import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const products = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Succulents", image: "https://via.placeholder.com/100" },
  { id: 2, name: "Snake Plant", price: 15, category: "Succulents", image: "https://via.placeholder.com/100" },
  { id: 3, name: "Money Plant", price: 12, category: "Indoor", image: "https://via.placeholder.com/100" },
  { id: 4, name: "Peace Lily", price: 20, category: "Flowering", image: "https://via.placeholder.com/100" },
  { id: 5, name: "Spider Plant", price: 14, category: "Indoor", image: "https://via.placeholder.com/100" },
  { id: 6, name: "Areca Palm", price: 25, category: "Palms", image: "https://via.placeholder.com/100" }
];

const ProductList = () => {
  const dispatch = useDispatch();

  // keeps track of added products for UI change
  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedItems((prev) => [...prev, product.id]);
  };

  // group products by category
  const groupedProducts = products.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div>

      {/* NAVBAR (included in same file) */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "12px 20px",
          backgroundColor: "#2d6a4f",
          color: "white",
          marginBottom: "20px"
        }}
      >
        <h2 style={{ margin: 0 }}>🌿 Plant Shop</h2>

        <div>
          <span style={{ marginRight: "15px", cursor: "pointer" }}>Home</span>
          <span style={{ cursor: "pointer" }}>Cart</span>
        </div>
      </nav>

      <h1 style={{ textAlign: "center" }}>Indoor Plants</h1>

      {/* CATEGORY + PRODUCTS */}
      {Object.keys(groupedProducts).map((category) => (
        <div key={category} style={{ marginBottom: "30px" }}>
          <h2 style={{ borderBottom: "1px solid #ccc" }}>{category}</h2>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {groupedProducts[category].map((product) => {
              const isAdded = addedItems.includes(product.id);

              return (
                <div
                  key={product.id}
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                    width: "150px",
                    textAlign: "center",
                    borderRadius: "8px"
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    width="100"
                    height="100"
                  />

                  <h3>{product.name}</h3>
                  <p>Price: ${product.price}</p>

                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={isAdded}
                    style={{
                      padding: "5px 10px",
                      cursor: isAdded ? "not-allowed" : "pointer",
                      backgroundColor: isAdded ? "gray" : "#40916c",
                      color: "white",
                      border: "none",
                      borderRadius: "5px"
                    }}
                  >
                    {isAdded ? "Added to Cart" : "Add to Cart"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
