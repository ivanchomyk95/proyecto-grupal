import React from "react";
import Boton from "../button/Button";

const Card = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10">
      <div className="bg-[#c5cacd57] max-w-sm rounded-3xl overflow-hidden shadow-xl mx-auto transition-transform duration-300 ease-in-out hover:scale-105">
        <img src="imgs/the-witcher.jpg" alt="The Witcher" className="w-full h-auto" />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">The Witcher</div>
          <p className="text-base text-gray-700">$200</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <Boton
            texto="Comprar" />
        </div>
      </div>

      <div className="mx-auto max-w-sm overflow-hidden rounded-3xl bg-[#c5cacd57] shadow-xl transition-transform duration-300 ease-in-out hover:scale-105" >
        <img
          src="imgs/r-evil.jpg"
          alt="Resident Evil"
          className="h-auto w-full"
        />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">Resident Evil</div>
          <p className="text-base text-gray-700">$300</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <Boton
            texto="Comprar" />
        </div>
      </div>

      <div className="mx-auto max-w-sm overflow-hidden rounded-3xl bg-[#c5cacd57] shadow-xl transition-transform duration-300 ease-in-out hover:scale-105">
        <img
          src="imgs/serious-sam.jpg"
          alt="Serious Sam"
          className="h-auto w-full"
        />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">Serious Sam</div>
          <p className="text-base text-gray-700">$100</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <Boton
            texto="Comprar" />
        </div>
      </div>

      <div className="mx-auto max-w-sm overflow-hidden rounded-3xl bg-[#c5cacd57] shadow-xl transition-transform duration-300 ease-in-out hover:scale-105">
        <img
          src="imgs/batman-arkham.jpg"
          alt="Batman Arkham"
          className="h-auto w-full"
        />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">Batman Arkham</div>
          <p className="text-base text-gray-700">$200</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <Boton
            texto="Comprar" />
        </div>
      </div>
    </div>
  );
};

export default Card;
