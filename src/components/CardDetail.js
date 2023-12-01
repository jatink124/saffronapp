import React, { useState, useEffect } from 'react';
import Saffroninfo from './Saffroninfo';
import SampleModal from './SampleModal';
import { Link, useParams } from 'react-router-dom';
import './css/CardDetail.css'; // Import a CSS file for additional styling

const CardDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const cardsData = [
    { id: 1, name: 'Product 1', price: 29.99, image: '/images/1.jpg' },
    { id: 2, name: 'Product 2', price: 39.99, image: '/images/2.jpg' },
    { id: 3, name: 'Product 3', price: 49.99, image: '/images/3.jpg' },
    { id: 4, name: 'Product 4', price: 59.99, image: '/images/4.jpg' },
    { id: 5, name: 'Product 5', price: 69.99, image: '/images/5.jpg' },
    { id: 6, name: 'Product 6', price: 79.99, image: '/images/6.jpg' },
    { id: 7, name: 'Product 7', price: 89.99, image: '/images/7.jpg' },
    { id: 8, name: 'Product 8', price: 99.99, image: '/images/8.jpg' },
  ];
  useEffect(() => {
    // Find the product in the cardsData array based on the id
    const foundProduct = cardsData.find((card) => card.id === parseInt(id, 10));
    setProduct(foundProduct);
  }, [cardsData, id]);

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
    console.log('Clicked "Buy Now"!');
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

  if (!product) {
    return <div>Product not found</div>;
  }

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
        {product.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
        </p>
        {/* Add other product details here */}
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
          <a
  onClick={handleBuyNow}
  href="/buynow" // Replace "#" with the desired URL
  className="mt-2 md:ml-2 md:mt-0 px-4 py-2 bg-green-500 text-white rounded"
>
  Buy Now
</a>
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
