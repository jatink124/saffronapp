import React, { useState } from 'react';
import Saffroninfo from './Saffroninfo';
import SampleModal from './SampleModal';
import { Link } from 'react-router-dom';
import './css/CardDetail.css'; // Import a CSS file for additional styling

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
    setCodAvailable(postalCode.trim() !== '');
  };

  const handleBuyNow = () => {
    console.log('Buy Now clicked!');
  };

  const handleTrySample = () => {
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
    console.log('User information saved:', userInfo);
    setShowModal(false);
  };

  return (
    <div className="flex flex-col md:flex-row p-4">
      <div className="md:w-1/2 mb-4 md:mb-0">
        <img className="w-full h-auto" src={product.image} alt={product.name} />
      </div>
      <div className="md:w-full p-4">
        <h2 className={`text-gray-900 font-bold text-xl text-size-default md:text-size-medium lg:text-size-large`}>
          {product.name}
        </h2>

        <p className={`text-gray-700 mt-2 text-size-default md:text-size-medium lg:text-size-large`}>
          ${product.price}
        </p>
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
            className="mt-2 md:ml-2 md:mt-0 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Check Postal Code
          </button>
          <Link to="/buynow">
            <button
              onClick={handleBuyNow}
              className="mt-2 md:ml-2 md:mt-0 px-4 py-2 bg-green-500 text-white rounded"
            >
              Buy Now
            </button>
          </Link>
          <button
            onClick={handleTrySample}
            className="mt-2 md:ml-2 md:mt-0 px-4 py-2 bg-yellow-500 text-white rounded"
          >
            Try Sample
          </button>
        </div>
        <Saffroninfo />
      </div>

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
