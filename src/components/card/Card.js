import React from "react";
import Boton from "../button/Button";
import { cards } from "../../../public/dataSet/cards";

export default function Card() {
  const tarjeta = cards.map(({img, titulo, precio, promo}) => {
    return (
      <div className="bg-[#c5cacd57] max-w-xs rounded-3xl overflow-hidden shadow-xl mx-auto transition-transform duration-300 ease-in-out hover:scale-105">
        <img src={img} alt="The Witcher" className="w-full h-auto" />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">{titulo}</div>
          <p className="text-base text-gray-600"><s>{precio}</s></p>
          <p className=" text-xl text-green-700 font-bold">{promo}</p>
        </div>
        <div className="justify-center flex px-6 py-2">
          <Boton texto="Comprar" />
        </div>
      </div>
    );
  });

  return (
    <div>
      <h2 className="mb-10 text-center text-lg md:text-xl lg:text-2xl xl:text-3xl">
        ¡Aprovecha Nuestras Ofertas de la Semana!
      </h2>
      <div id="cards" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10">
        {tarjeta}
      </div>
    </div>
  );
}