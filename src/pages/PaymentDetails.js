import React, { useState, useEffect } from 'react';


function PaymentDetails() {
    const [formData, setFormData] = useState({
        name: '',
        identityCard: '',
        cardNumber: '',
        expirationDate: '',
        cvv: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        // e.preventDefault();
        //    try {
        //    const response = await fetch("http://localhost:3001/PaymentDetails", {
        //      method: "POST",
        //      headers: {
        //        "Content-Type": "application/json",
        //      },
        //      body: JSON.stringify({ username, email, userpassword }),
        //    });
         
      };
      // const handleRegister = async (e) => {
      //   e.preventDefault();
    
      //   try {
      //     const response = await fetch("http://localhost:3001/register", {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify({ username, email, userpassword }),
      //     });
    
      //     if (response.ok) {
      //       alert("Registration successful! Please login with your new account.");
      //       // Clear the input fields after successful registration
      //       setUsername("");
      //       setUserPassword("");
      //       setEmail("");
      //       navigate("/login");
      //     } else {
      //       const data = await response.json();
      //       alert(data.error);
      //     }
      //   } catch (error) {
      //     console.error("Error during registration:", error);
      //     alert("An error occurred during registration");
      //   }
      // };
    
    
      return (
        <div>
          <h2>Bank Account Details</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='name'>Name:</label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor='identityCard'>Identity Card:</label>
              <input
                type='text'
                id='identityCard'
                name='identityCard'
                value={formData.identityCard}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor='cardNumber'>Card Number:</label>
              <input
                type='text'
                id='cardNumber'
                name='cardNumber'
                value={formData.cardNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor='expirationDate'>Expiration Date:</label>
              <input
                type='text'
                id='expirationDate'
                name='expirationDate'
                value={formData.expirationDate}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor='cvv'>CVV:</label>
              <input
                type='text'
                id='cvv'
                name='cvv'
                value={formData.cvv}
                onChange={handleChange}
                required
              />
            </div>
            <button type='submit'>Pay Now</button>
          </form>
        </div>
      );
 
}

export default PaymentDetails;