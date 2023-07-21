import React, { useState } from "react";

import masterCard from "../../assets/all-images/master-card.jpg";
import paypal from "../../assets/all-images/paypal.jpg";
import "../../styles/payment-method.css";

const PaymentMethod = () => {

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
       <div className="payment">
        <label htmlFor="bankTransfer" className="d-flex align-items-center gap-2">
          <input
            type="radio"
            id="bankTransfer"
            name="paymentMethod"
            value="bankTransfer"
            checked={selectedOption === "bankTransfer"}
            onChange={handleOptionChange}
          />
          Direct Bank Transfer
        </label>
      </div>

      <div className="payment mt-3">
        <label htmlFor="cheque" className="d-flex align-items-center gap-2">
          <input
            type="radio"
            id="cheque"
            name="paymentMethod"
            value="cheque"
            checked={selectedOption === "cheque"}
            onChange={handleOptionChange}
          />
          Cheque Payment
        </label>
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="masterCard" className="d-flex align-items-center gap-2">
          <input
            type="radio"
            id="masterCard"
            name="paymentMethod"
            value="masterCard"
            checked={selectedOption === "masterCard"}
            onChange={handleOptionChange}
          />
          Master Card
        </label>
        <img src={masterCard} alt="" />
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="paypal" className="d-flex align-items-center gap-2">
          <input
            type="radio"
            id="paypal"
            name="paymentMethod"
            value="paypal"
            checked={selectedOption === "paypal"}
            onChange={handleOptionChange}
          />
          Paypal
        </label>
        <img src={paypal} alt="" />
      </div>
     
    </>
  );
};

export default PaymentMethod;
