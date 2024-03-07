import React from 'react';
import Boton from '../button/Button';

const Card = ({ image, title, price }) => {
  return (
    <div className="overflow-hidden bg-f8f9fa rounded-md shadow-sm transition duration-300 transform hover:scale-105 mx-auto max-w-sm">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">${price}</p>
        <div className="pt-4 pb-2">
          <Boton texto="Comprar" />
        </div>
      </div>
    </div>
  );
};

export default Card;


