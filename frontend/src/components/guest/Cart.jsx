import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const Cart = () => {
  const [userId, setUserId] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserId(decoded.userId);
        fetchCartItems(decoded.userId);
      } catch (err) {
        setError("Failed to decode token. Please ensure you are logged in.");
        console.error("Error decoding token:", err);
      }
    } else {
      setError("No token found. Please log in.");
    }
  }, []);

  const fetchCartItems = async (userId) => {
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:5001/viewcart/${userId}`);
      const data = await response.json();
      if (data && data.items && Array.isArray(data.items)) {
        setCartItems(data.items);
      } else {
        console.error("Expected 'items' array in the response, got:", data);
        setError("Failed to fetch cart items: Data format is incorrect.");
        setCartItems([]);
      }
    } catch (error) {
      setError(`Failed to fetch cart items: ${error.message}`);
      console.error("Error fetching cart items:", error);
      setCartItems([]);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteCartItem = async (itemId) => {
    try {
      const response = await fetch(
        `http://localhost:5001/cart/items/${itemId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setCartItems((currentItems) =>
          currentItems.filter((item) => item.id !== itemId)
        );
      } else {
        throw new Error("Failed to delete the item.");
      }
    } catch (error) {
      setError(`Error deleting cart item: ${error.message}`);
      console.error("Error deleting cart item:", error);
    }
  };

  const handleCheckout = async () => {
    try {
      const deleteResponse = await fetch(
        `http://localhost:5001/cart/${userId}/items`,
        {
          method: "DELETE",
        }
      );
      if (!deleteResponse.ok) throw new Error("Failed to clear the cart.");

      for (const item of cartItems) {
        const enrollResponse = await fetch(`http://localhost:5001/create`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId, courseId: item.course.id }),
        });
        if (!enrollResponse.ok)
          throw new Error(`Failed to enroll in course ID: ${item.course.id}`);
      }

      setCartItems([]);
      alert("Checkout successful! All courses have been enrolled.");
    } catch (error) {
      setError(`Checkout failed: ${error.message}`);
      console.error("Error during checkout:", error);
    }
  };

  const clearCart = async () => {
    try {
      const deleteResponse = await fetch(
        `http://localhost:5001/cart/${userId}/items`,
        {
          method: "DELETE",
        }
      );
      if (!deleteResponse.ok) throw new Error("Failed to clear the cart.");
      setCartItems([]);
      alert("Cart is Cleared!");
    } catch (error) {
      setError(`Checkout failed: ${error.message}`);
      console.error("Error during checkout:", error);
    }
  };

  return (
    <div className="cart-container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-2xl font-bold text-center mb-4">Shopping Cart</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <>
          <ul className="space-y-3">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white shadow p-4 rounded-lg"
              >
                <span className="font-medium">{item.course.title}</span>
                <span className="text-gray-500">
                  Price: ${item.course.price}
                </span>
                <button
                  onClick={() => deleteCartItem(item.id)}
                  className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          {cartItems.length > 0 && (
            <>
              <button
                onClick={clearCart}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4 mr-2"
              >
                Clear Cart
              </button>
              <button
                onClick={handleCheckout}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Checkout
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
