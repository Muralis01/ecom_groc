import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './cart.css'; // You can create a CSS file to style the cart page

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart items from cart.json
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://localhost:3009/products'); // Adjust the URL if necessary
        setCartItems(response.data); // Assuming your API returns an array of cart items
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} className="cart-item-img" />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>{item.price}</p>
                <p>{item.discount}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
