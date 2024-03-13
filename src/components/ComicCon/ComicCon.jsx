import React from 'react';
import Boton from '../button/Button';

const ComicCon = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row bg-gray-100 rounded-lg overflow-hidden shadow-lg'>
      <div className='lg:w-1/2'>
        <img src='/imgs/nena-min-2.svg' className='w-full object-cover' alt="Niña cosplay" />
      </div>
      <div className='flex flex-col justify-center lg:w-1/2 p-8'>
        <img src="/imgs/logo-ACC.png" alt="Logo ACC" className='w-[50%] md:w-[350px] h-auto mb-8 mx-auto lg:mx-0' />
        <p className='text-lg text-gray-700 mb-8'>Lo mejor del cosplay! Vení disfrazado de tu personaje
          favorito y sacate fotos con otros cosplayers. Además, podrás participar de concursos por increíbles premios. Animate a participar, es tu oportunidad de brillar!</p>
        <p className='text-lg text-gray-700 mb-8'>
          Celebramos la cultura pop con atracciones para toda la familia. Presentaciones, shows, talleres, paneles, exhibiciones, video juegos, experiencias recreativas, cosplay, juegos, una increíble variedad gastronómica y mucho más!
        </p>
        <Boton texto="Comprar Entrada" className='align-middle mx-auto lg:mx-0' />
      </div>
    </div>
  )
}

export default ComicCon;



