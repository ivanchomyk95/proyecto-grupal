"use client";
import { ContextData } from "@/app/ContexProvider/ContextProvider";
import React, { useContext, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

function Inicio() {
  const { addToCart } = useContext(ContextData);

  const slider = [
    {
      url: "/imgs/rdr2_background.jpg",
      id: "43",
      name: "RED DEAD REDEMPTION 2",
      backgroundPosition: "center",
      title: "RED DEAD REDEMPTION 2",
      subtitle: "Red Dead Redemption 2",
      description:
        "Con un mundo abierto expansivo y detallado, el juego ofrece una experiencia inmersiva donde puedes explorar vastos paisajes, y tomar decisiones morales que afectarán el desarrollo de la historia. ",
      imageAlt: "/imgs/rdr2_game.jpg",
      prevPrice: "$ 99.99",
      price: "$ 85.99",
      platforms: ["steam.svg", "play.svg", "xbox.svg"],
    },
    {
      url: "/imgs/batman_background.png",
      id: "42",
      name: "BATMAN: ARKHAM KNIGHT",
      backgroundPosition: "center",
      title: "BATMAN: ARKHAM KNIGHT",
      subtitle: "Batman: Arkham Knight",
      description:
        "Con una narrativa envolvente, gráficos impresionantes y un excepcional sistema de combate, los jugadores exploran la ciudad caótica, resuelven intrincados acertijos y combaten amenazas icónicas.",
      imageAlt: "/imgs/batman.png",
      prevPrice: "$ 59.99",
      price: "$ 45.99",
      platforms: ["steam.svg", "play.svg", "xbox.svg"],
    },
    {
      url: "/imgs/palworld_background.png",
      id: "41",
      name: "PALWORLD",
      title: "PALWORLD",
      subtitle: "Palworld",
      description:
        "Los jugadores controlan un avatar personalizable desde una perspectiva en tercera persona con el objetivo de explorar las islas Palpagos de mundo abierto y descubrir sus secretos.",
      imageAlt: "/imgs/palworld.jpg",
      prevPrice: "$ 39.99",
      price: "$ 19.99",
      platforms: ["steam.svg", "xbox.svg"],
    },
    {
      url: "/imgs/hf_background.jpg",
      id: "40",
      name: "HALF-LIFE ALYX",
      title: "HALF-LIFE ALYX",
      subtitle: "Half-Life Alyx",
      description:
        "Profundiza en la historia del universo de Half-Life y proporciona más contexto sobre los eventos que preceden a Half-Life 2. El juego ha sido elogiado por su inmersidad.",
      imageAlt: "/imgs/hf.png",
      prevPrice: "$ 25.99",
      price: "$ 10.99",
      platforms: ["steam.svg"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slider.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slider.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  /* useEffect(() =>{
        const interval = setInterval(() =>{
            nextSlide();
        }, 6000);

        return () => clearInterval(interval);
    }, [currentIndex]) */

  return (
    <div className=" mb-36 h-[780px] w-screen ">
      <div
        style={{
          backgroundImage: `url(${slider[currentIndex].url})`,
          backgroundPosition:
            slider[currentIndex].backgroundPosition || "center",
        }}
        className="h-full w-full bg-cover"
      >
        <div className="absolute left-4 top-[50%] z-40 -translate-x-0 translate-y-[50%] cursor-pointer rounded-full p-0.5 text-2xl text-primary">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        <div className="absolute right-4 top-[50%] z-40 -translate-x-0 translate-y-[50%] cursor-pointer rounded-full p-0.5 text-2xl text-primary">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        <div
          className="absolute left-[50%]
                      top-[50%]
                      z-50 -translate-y-[80%] translate-x-[-50%] transform text-center text-white sm:mt-5"
        >
          <h2 className="mb-2 text-center text-xl font-bold ">
            <div
              className="absolute z-[-1] mt-[510px] flex h-[150px] w-48 content-center
         items-center justify-center bg-zinc-900 sm:ml-[50px]
         lg:left-[287px] lg:top-[-40%]"
            ></div>
            {slider[currentIndex].title}
          </h2>
          <p className="mb-5 text-center text-base lg:mx-auto lg:w-1/2">
            {slider[currentIndex].description}
          </p>
          {slider[currentIndex].imageAlt && (
            <div
              className="mx-auto h-56 w-48 shadow-xl"
              style={{
                backgroundImage: `url(${slider[currentIndex].imageAlt})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="z-1 inset-0 bottom-0 pb-8  text-center text-white">
                <h3 className="pt-[230px] text-xs ">
                  {slider[currentIndex].subtitle}
                </h3>
                <p className="pr-28 pt-2 text-sm line-through">
                  {slider[currentIndex].prevPrice}
                </p>
                <p className="pl-2 pr-28 text-lg font-bold text-green-500  ">
                  {slider[currentIndex].price}
                </p>

                <div className="ml-24 mt-[-30px] flex justify-center">
                  {slider[currentIndex].platforms.map((platforms) => (
                    <img
                      key={platforms}
                      src={`/${platforms}`}
                      alt={platforms}
                      className="mr-[-10px] h-8 w-8 opacity-90"
                    />
                  ))}
                </div>
                <button
                  className="lg:w/13 mt-2 h-8 w-[180px] cursor-pointer bg-gray-700 font-medium text-white hover:bg-white hover:text-primary lg:mx-auto"
                  onClick={() => {
                    addToCart(slider[currentIndex]);
                  }}
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          )}
          <span className="text-sm">{slider[currentIndex].spanText}</span>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
