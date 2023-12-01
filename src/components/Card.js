import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CardDetail from './CardDetail';
import BannerImage from './BannerImage';

const Card = () => {
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

  const [selectedProduct, setSelectedProduct] = useState();

  const showCardDetail = (product) => {
    setSelectedProduct(product);
  };

  const goBack = () => {
    setSelectedProduct(null);
  };

  return (
    <>
   
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2"> {/* Adjust the gap value as needed */}
      {selectedProduct ? (
        <CardDetail {...selectedProduct} goBack={goBack} />
      ) : (
        cardsData.map((card) => (
          <Link key={card.id} to={`/card/${card.id}`}>
            <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 ml-4">
              <a href="#">
                <img className="rounded-t-lg" src={card.image} alt={card.name} />
              </a>
              <div className="p-4">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.name}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
  {card.price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-saffron bg-saffron-700 rounded-lg hover:bg-saffron-800 focus:ring-4 focus:outline-none focus:ring-saffron-300 dark:bg-saffron-600 dark:hover:bg-saffron-700 dark:focus:ring-saffron-800">
                Buy Now
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
              </div>
            </div>
          </Link>
        ))
      )}
    </div></>
  );
};

export default Card;
