import React from 'react';

const Card = ({ image, title, price }) => {
  return (
    <div className=" bg-[#c5cacd57] max-w-sm rounded-3xl overflow-hidden shadow-xl">
      <img src={image} alt={title} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">${price}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-red-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Card;
