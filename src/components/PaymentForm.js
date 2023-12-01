import React, { useState } from 'react';

const RazorpayForm = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [showDebitCardDetails, setShowDebitCardDetails] = useState(true);

  const handleCheckboxChange = (method) => {
    setSelectedPaymentMethod(method);

    // Show Debit Card details when Credit/Debit Card checkbox is selected
    setShowDebitCardDetails(method === 'card');

    // Show textbox when Other UPI Apps checkbox is selected
    if (method === 'upi') {
      setShowTextbox(true);
    } else {
      setShowTextbox(false);
    }
  };

  const [showTextbox, setShowTextbox] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment method selected:', selectedPaymentMethod);
    // Implement your Razorpay integration logic here
  };

  return (
    <div className="container mx-auto my-16 p-4">
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

        {/* Textbox for Other UPI Apps */}
        {showTextbox && (
          <div className="col-span-3 mt-4">
            <div className="flex flex-col">
              <label>Enter UPI Details:</label>
              <input
                type="text"
                placeholder="Enter UPI details"
                /* Add necessary attributes for UPI input */
              />
            </div>
          </div>
        )}

        {/* Debit Card details */}
        {showDebitCardDetails && (
          <div className="col-span-3 mt-4">
            <div className="flex flex-col">
              <label>Card Number:</label>
              <input
                type="text"
                placeholder="Enter card number"
                /* Add necessary attributes for card number input */
              />
            </div>

            <div className="flex flex-col">
              <label>Expiry Date:</label>
              <input
                type="text"
                placeholder="MM/YYYY"
                /* Add necessary attributes for expiry date input */
              />
            </div>

            <div className="flex flex-col">
              <label>CVV:</label>
              <input
                type="text"
                placeholder="Enter CVV"
                /* Add necessary attributes for CVV input */
              />
            </div>
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
