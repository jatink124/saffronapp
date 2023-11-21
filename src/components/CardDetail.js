import React, { useState } from 'react';
import Saffroninfo from './Saffroninfo';
import SampleModal from './SampleModal';
import { Link } from 'react-router-dom';
const CardDetail = ({ product }) => {
  const [postalCode, setPostalCode] = useState('');
  const [codAvailable, setCodAvailable] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '',
    address: '',
    pincode: '',
    contactNumber: '',
  });

  const checkCodAvailability = () => {
    // Add logic to check COD availability based on postal code
    // For demonstration purposes, let's assume COD is available if the postal code is not empty
    setCodAvailable(postalCode.trim() !== '');
  };

  const handleBuyNow = () => {
    // Add logic for handling "Buy Now" button click
    console.log('Buy Now clicked!');
  };

  const handleTrySample = () => {
    // Reset user info when "Try Sample" button is clicked
    setUserInfo({
      name: '',
      address: '',
      pincode: '',
      contactNumber: '',
    });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  const handleSaveUserInfo = () => {
    // Add logic to save user information
    console.log('User information saved:', userInfo);
    setShowModal(false);
  };

  return (
    <div className="flex p-4">
      <div className="w-1/2">
        <img className="w-full h-auto" src={product.image} alt={product.name} />
      </div>
      <div className="w-1/2 p-4">
        <h2 className="text-gray-900 font-bold text-xl">{product.name}</h2>
        <p className="text-gray-700 mt-2">${product.price}</p>
        {/* Add a rating display if available */}
        {product.rating && (
          <p className="text-gray-700 mt-2">Rating: {product.rating}</p>
        )}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Enter postal code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            className="p-2 border rounded"
          />
          <button
            onClick={checkCodAvailability}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Check COD Availability
          </button>
          {codAvailable && <p className="text-green-500 mt-2">COD Available!</p>}
          <Link to="/buynow">
          <button
            onClick={handleBuyNow}
            className="ml-2 px-4 py-2 bg-green-500 text-white rounded"
          >
            Buy Now
          </button></Link>
          <button
            onClick={handleTrySample}
            className="ml-2 px-4 py-2 bg-yellow-500 text-white rounded"
          >
            Try Sample
          </button>
        </div>
        <Saffroninfo />
      </div>

      {/* Modal */}
      <SampleModal
        showModal={showModal}
        onClose={handleCloseModal}
        onSampleSubmit={handleSaveUserInfo}
        userInfo={userInfo}
        onUserInfoChange={handleUserInfoChange}
      />
    </div>
  );
};

export default CardDetail;
