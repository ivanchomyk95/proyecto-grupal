import React from 'react';
import Boton from '../button/Button';

const Oferta = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[#468B97] opacity-40" />
      <div
        className="w-full h-[20rem] mb-8 bg-repeat flex flex-col justify-center items-center"
        style={{
          backgroundImage: "url('/imgs/bgRepeat.png')",
          backgroundSize: 'auto 100%',
          backgroundPosition: '2px 2px', 
        }}
      >
        <h3 className="text-[#FFF] text-3xl text-center mb-4">
            Obtén un descuento del 50% en tu primer compra!
        </h3>
        <img src="/imgs/offer.png" alt="Oferta" className="mb-4" />
        <Boton texto="Lo quiero" />
      </div>
    </div>
  );
};

export default Oferta;
