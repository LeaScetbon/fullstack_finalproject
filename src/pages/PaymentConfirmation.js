import React, { useState, useEffect } from 'react';
import "./PaymentConfirmation.css";

function PaymentConfirmation() {  
    return (
        <div className="confirmation">
          <h2>Payment Confirmation</h2>
          <div className="confirmation-text">
            <h3>Your payment was successful.</h3>
            <h3>Thank you for your purchase!</h3>
          </div>
        </div>
    )
}

export default PaymentConfirmation;