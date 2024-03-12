'use client'
import React, { useEffect, useState } from 'react';
import { BsChevronCompactLeft , BsChevronCompactRight } from 'react-icons/bs';


function Inicio() {

    const slider = [
        {
          url: '/imgs/rdr2_background.jpg',
          backgroundPosition: 'center',
          title: 'RED DEAD REDEMPTION 2',
          description: 'Con un mundo abierto expansivo y detallado, el juego ofrece una experiencia inmersiva donde puedes explorar vastos paisajes, y tomar decisiones morales que afectarán el desarrollo de la historia. ',
          imageAlt: '/imgs/rdr2_game.jpg',
          spanText: '',
        },
        {
          url: '/imgs/batman_background.png',
          backgroundPosition: 'center',
          title: 'Batman: Arkham Knight',
          description: 'Con una narrativa envolvente, gráficos impresionantes y un excepcional sistema de combate, los jugadores exploran la ciudad caótica, resuelven intrincados acertijos y combaten amenazas icónicas.',
          imageAlt: '',
          spanText: '',
        },
        {
          url: '/imgs/palworld_background.png',
          title: 'Palworld',
          description: 'Los jugadores controlan un avatar personalizable desde una perspectiva en tercera persona con el objetivo de explorar las islas Palpagos de mundo abierto y descubrir sus secretos.',
          imageAlt: '',
          spanText: '',
        },
        {
          url: '/imgs/hf_background.jpg',
          title: 'Half-Life',
          description: 'Nos transporta a un mundo donde la física y la narrativa se entrelazan de manera magistral. Encarnando al científico Gordon Freeman, te enfrentas a un desastre interdimensional desencadenado en el centro de investigación Black Mesa',
          imageAlt: '',
          spanText: '',
        },
      ];

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slider.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }


    const nextSlide = () => {
        const isLastSlide = currentIndex === slider.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }


    /* useEffect(() =>{
        const interval = setInterval(() =>{
            nextSlide();
        }, 6000);

        return () => clearInterval(interval);
    }, [currentIndex]) */

    return(
        <div className='max-w-[1400px] h-[780px] w-screen sm:w-full md:w-96 lg:w-1/3 xl:w-1/4'>
    <div style={{backgroundImage: `url(${slider[currentIndex].url})`, backgroundPosition: slider[currentIndex].backgroundPosition || 'center'}} className='w-full h-full bg-cover'>
      
      <div className='absolute top-[50%] -translate-x-0 translate-y-[50%] left-4 text-2xl rounded-full p-0.5 z-40 text-primary cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide}  size={30} />
      </div>
      
      <div className='absolute top-[50%] -translate-x-0 translate-y-[50%] right-4 text-2xl rounded-full p-0.5 z-40 text-primary cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className='absolute top-40 left-4 text-white'>
        <h2 className='text-2xl text-center font-bold mb-2'>{slider[currentIndex].title}</h2>
        <p className='text-base text-center mb-5'>{slider[currentIndex].description}</p>
        {slider[currentIndex].imageAlt && (
    <div
        className='w-48 h-56  mb-2 content-center ml-[75px]'
        style={{
            backgroundImage: `url(${slider[currentIndex].imageAlt})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
    >
      <div className="text-center text-white inset-0 bottom-0  pb-8 z-1">
            <h3 className="text-lg font-semibold pt-56 ">Subtítulo</h3>
            <p className="text-sm">Precio: $</p>
        </div>

    </div>
)}
        <span className='text-sm'>{slider[currentIndex].spanText}</span>
      </div>

    </div>
  </div>
    )}

    export default Inicio