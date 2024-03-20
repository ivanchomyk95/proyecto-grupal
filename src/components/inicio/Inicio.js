'use client'
import React, { useEffect, useState } from 'react';
import { BsChevronCompactLeft , BsChevronCompactRight } from 'react-icons/bs';

/*aa*/

function Inicio() {

    const slider = [
        {
          url: '/imgs/rdr2_background.jpg',
          backgroundPosition: 'center',
          title: 'RED DEAD REDEMPTION 2',
          subtitle: 'Red Dead Redemption 2',
          description: 'Con un mundo abierto expansivo y detallado, el juego ofrece una experiencia inmersiva donde puedes explorar vastos paisajes, y tomar decisiones morales que afectarán el desarrollo de la historia. ',
          imageAlt: '/imgs/rdr2_game.jpg',
          prevPrice: '$ 99.99',
          price: '$ 85.99',
          platforms:['steam.svg', 'play.svg', 'xbox.svg'],
        },
        {
          url: '/imgs/batman_background.png',
          backgroundPosition: 'center',
          title: 'BATMAN: ARKHAM KNIGHT',
          subtitle: 'Batman: Arkham Knight',
          description: 'Con una narrativa envolvente, gráficos impresionantes y un excepcional sistema de combate, los jugadores exploran la ciudad caótica, resuelven intrincados acertijos y combaten amenazas icónicas.',
          imageAlt: '/imgs/batman.png',
          prevPrice: '$ 59.99',
          price: '$ 45.99',
          platforms:['steam.svg', 'play.svg', 'xbox.svg'],
        },
        {
          url: '/imgs/palworld_background.png',
          title: 'PALWORLD',
          subtitle: 'Palworld',
          description: 'Los jugadores controlan un avatar personalizable desde una perspectiva en tercera persona con el objetivo de explorar las islas Palpagos de mundo abierto y descubrir sus secretos.',
          imageAlt: '/imgs/palworld.jpg',
          prevPrice: '$ 39.99',
          price: '$ 19.99',
          platforms:['steam.svg', 'xbox.svg'],
        },
        {
          url: '/imgs/hf_background.jpg',
          title: 'HALF-LIFE ALYX',
          subtitle: 'Half-Life Alyx',
          description: 'Profundiza en la historia del universo de Half-Life y proporciona más contexto sobre los eventos que preceden a Half-Life 2. El juego ha sido elogiado por su inmersidad.',
          imageAlt: '/imgs/hf.png',
          prevPrice: '$ 25.99',
          price: '$ 10.99',
          platforms:['steam.svg'],
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
        <div className=' h-[780px] w-screen mb-36 '>
    <div style={{backgroundImage: `url(${slider[currentIndex].url})`,
                 backgroundPosition: slider[currentIndex].backgroundPosition || 'center', }} className='w-full h-full bg-cover'>
      
      <div className='absolute top-[50%] -translate-x-0 translate-y-[50%] left-4 text-2xl rounded-full p-0.5 z-40 text-primary cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide}  size={30} />
      </div>
      
      <div className='absolute top-[50%] -translate-x-0 translate-y-[50%] right-4 text-2xl rounded-full p-0.5 z-40 text-primary cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className='absolute z-50
                      sm:mt-5
                      top-[50%] left-[50%] transform translate-x-[-50%] -translate-y-[80%] text-center text-white'>
        <h2 className='text-xl text-center font-bold mb-2 '>
        <div className="w-48 h-[150px] absolute mt-[510px] bg-zinc-900 content-center sm:ml-[50px]
         flex items-center justify-center z-[-1]
         lg:left-[287px] lg:top-[-40%]"></div>
        {slider[currentIndex].title}</h2>
        <p className='text-base text-center mb-5 lg:w-1/2 lg:mx-auto'>{slider[currentIndex].description}</p>
        {slider[currentIndex].imageAlt && (
    <div
        className='w-48 h-56 mx-auto shadow-xl'
        style={{
            backgroundImage: `url(${slider[currentIndex].imageAlt})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
    >
      <div className="text-center text-white inset-0 bottom-0  pb-8 z-1">
            <h3 className="text-xs pt-[230px] ">{slider[currentIndex].subtitle}</h3>
            <p className="text-sm pr-28 pt-2 line-through">{slider[currentIndex].prevPrice}</p>
            <p className="text-lg pl-2 pr-28 font-bold text-green-500  ">{slider[currentIndex].price}</p>


            <div className="flex justify-center ml-24 mt-[-30px]">
              {slider[currentIndex].platforms.map(platforms => (
                  <img key={platforms} src={`/${platforms}`} alt={platforms} className="w-8 h-8 mr-[-10px] opacity-90" />
                      ))}
                      
                      </div>
              <button className='bg-gray-700 text-white mt-2 font-medium w-[180px] h-8 cursor-pointer hover:text-primary hover:bg-white lg:mx-auto lg:w/13 '>Añadir al carrito</button>

        </div>

    </div>
)}
        <span className='text-sm'>{slider[currentIndex].spanText}</span>
      </div>
      
      
    </div>
  </div>
    )}

    export default Inicio