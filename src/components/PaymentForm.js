import React, { useState } from 'react';

const RazorpayForm = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [showDebitCardDetails, setShowDebitCardDetails] = useState(false);

  const handleCheckboxChange = (method) => {
    setSelectedPaymentMethod(method);
    
    // Show Debit Card details when Credit/Debit Card checkbox is selected
    if (method === 'card') {
      setShowDebitCardDetails(true);
    } else {
      setShowDebitCardDetails(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment method selected:', selectedPaymentMethod);
    // Implement your Razorpay integration logic here
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Razorpay Payment Form</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-4">
        {/* Credit/Debit Card */}
        <div className="col-span-1">
          <label>
            <input
              type="checkbox"
              checked={selectedPaymentMethod === 'card'}
              onChange={() => handleCheckboxChange('card')}
              className="mr-2"
            />
            Credit/Debit Card
          </label>
        </div>

        {/* Other UPI Apps */}
        <div className="col-span-1">
          <label>
            <input
              type="checkbox"
              checked={selectedPaymentMethod === 'upi'}
              onChange={() => handleCheckboxChange('upi')}
              className="mr-2"
            />
            Other UPI Apps
          </label>
        </div>

        {/* Cash on Delivery */}
        <div className="col-span-1">
          <label>
            <input
              type="checkbox"
              checked={selectedPaymentMethod === 'cod'}
              onChange={() => handleCheckboxChange('cod')}
              className="mr-2"
            />
            Cash on Delivery
          </label>
        </div>

     {/* Debit Card details */}
{showDebitCardDetails && (
  <div className="col-span-3 mt-4">
    <label>Card Number:</label>
    <input
      type="text"
      placeholder="Enter card number"
      /* Add necessary attributes for card number input */
    />

    <label>Expiry Date:</label>
    <input
      type="text"
      placeholder="MM/YYYY"
      /* Add necessary attributes for expiry date input */
    />

    <label>CVV:</label>
    <input
      type="text"
      placeholder="Enter CVV"
      /* Add necessary attributes for CVV input */
    />
  </div>
)}

        {/* Submit Button */}
        <div className="col-span-3 mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Proceed to Pay
          </button>
        </div>
      </form>
    </div>
  );
};

export default RazorpayForm;
