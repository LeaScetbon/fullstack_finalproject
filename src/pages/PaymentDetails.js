import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PaymentDetails.css";
function PaymentDetails() {
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    if (name === "cardNumber") {
      // Remove any white spaces from the cardNumber field
      updatedValue = parseInt(value);
    } else if (name === "cvv") {
      // Parse the cvv field as an integer
      updatedValue = parseInt(value);
    }

    setFormData({ ...formData, [name]: updatedValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = JSON.parse(localStorage.getItem("username")).id;
      if (!userId) {
        alert("User ID not found in local storage");
        return;
      }

      const updatedFormData = {
        ...formData,
        username: JSON.parse(localStorage.getItem("username")).username,
      };

      const response = await fetch(
        `http://localhost:3001/users/${userId}/MyCart/PaymentDetails`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedFormData),
        }
      );

      const data = await response.json();
      console.log(data);
      // Assuming the response from the server contains a "message" field for successful payment
      if (response.ok) {
        alert(data.message);
        navigate("/PaymentConfirmation");
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while processing the payment");
    }
  };

  return (
    <div className="payment-container">
      <h2>Bank Account Details</h2>
      <form onSubmit={handleSubmit} className="payment-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="expirationDate">Expiration Date:</label>
          <input
            type="text"
            id="expirationDate"
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}

export default PaymentDetails;
