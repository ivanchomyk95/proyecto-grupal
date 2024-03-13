import React from 'react';
import Boton from '../../../proyecto-grupal/src/components/button/Button';

const Card = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10">
      <div className="bg-[#c5cacd57] max-w-sm rounded-3xl overflow-hidden shadow-xl mx-auto">
        <img src="imgs/the-witcher.jpg" alt="The Witcher" className="w-full h-auto" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Witcher</div>
          <p className="text-gray-700 text-base">$200</p>
        </div>
        <div className="px-6 pt-4 pb-2">
        <Boton
        texto="Comprar"/>
        </div>
      </div>

      <div className="bg-[#c5cacd57] max-w-sm rounded-3xl overflow-hidden shadow-xl mx-auto">
        <img src="imgs/r-evil.jpg" alt="Resident Evil" className="w-full h-auto" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Resident Evil</div>
          <p className="text-gray-700 text-base">$300</p>
        </div>
        <div className="px-6 pt-4 pb-2">
        <Boton
        texto="Comprar"/>
        </div>
      </div>

      <div className="bg-[#c5cacd57] max-w-sm rounded-3xl overflow-hidden shadow-xl mx-auto">
        <img src="imgs/serious-sam.jpg" alt="Serious Sam" className="w-full h-auto" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Serious Sam</div>
          <p className="text-gray-700 text-base">$100</p>
        </div>
        <div className="px-6 pt-4 pb-2">
        <Boton
        texto="Comprar"/>
        </div>
      </div>

      <div className="bg-[#c5cacd57] max-w-sm rounded-3xl overflow-hidden shadow-xl mx-auto">
        <img src="imgs/batman-arkham.jpg" alt="Batman Arkham" className="w-full h-auto" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Batman Arkham</div>
          <p className="text-gray-700 text-base">$200</p>
        </div>
        <div className="px-6 pt-4 pb-2">
        <Boton
        texto="Comprar"/>
        </div>
      </div>
    </div>
   
  );
};

export default Card;