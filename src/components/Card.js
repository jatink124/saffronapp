// Card.js
import React, { useState } from 'react';
import CardDetail from './CardDetail';

const Card = () => {
  const cardsData = [
    { id: 1, name: 'Product 1', price: 29.99, image: 'https://www.kashmirbox.com/cdn/shop/products/1_52_2048x.jpg?v=1645435953' },
    { id: 2, name: 'Product 2', price: 39.99, image: 'https://www.kashmirbox.com/cdn/shop/products/1_52_2048x.jpg?v=1645435953' },
    // Add more card data as needed
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);

  const showCardDetail = (product) => {
    setSelectedProduct(product);
  };

  const goBack = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {selectedProduct ? (
        <CardDetail product={selectedProduct} goBack={goBack} />
      ) : (
        cardsData.map((card) => (
          <div key={card.id} className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              onClick={() => showCardDetail(card)}
              className="w-full h-48 object-cover object-center cursor-pointer"
              src={card.image}
              alt={card.name}
            />
            <div className="p-4">
              <h2 className="text-gray-900 font-bold text-xl">{card.name}</h2>
              <p className="text-gray-700 mt-2">${card.price}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Card;
