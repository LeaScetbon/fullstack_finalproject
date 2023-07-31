import React, { useState, useEffect } from "react";
import "./PaymentConfirmation.css";

function PaymentConfirmation() {
  // Set up a state to control sound playback
  const [playCashSound, setPlayCashSound] = useState(false);

  // Play the cash sound on component mount
  useEffect(() => {
    setPlayCashSound(true);

    return () => {
      // Clean up: Stop the sound when the component unmounts
      setPlayCashSound(false);
    };
  }, []);
  return (
    <div className="confirmation">
      <h2>Payment Confirmation</h2>
      <div className="confirmation-text">
        <h3>Your payment was successful.</h3>
        <h3>Thank you for your purchase!</h3>
      </div>

      {playCashSound && (
        <audio autoPlay>
          <source
            src={process.env.PUBLIC_URL + "/cashSound.mp3"}
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
}

export default PaymentConfirmation;
