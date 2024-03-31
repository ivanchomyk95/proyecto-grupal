"use client";
import { ContextData } from "@/app/ContexProvider/ContextProvider";
import React, { useContext, useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useMediaQuery } from "@react-hook/media-query";

function Inicio() {
  const { addToCart } = useContext(ContextData);

  const slider = [
    {
      id: 43,
      url: "/imgs/rdr2_background.jpg",
      urlLarge: "/imgs/rdr2_large.png",
      backgroundPosition: "center",
      title: "RED DEAD REDEMPTION 2",
      name: "Red Dead Redemption 2",
      description:
        "Con un mundo abierto expansivo y detallado, el juego ofrece una experiencia inmersiva donde puedes explorar vastos paisajes, y tomar decisiones morales que afectarán el desarrollo de la historia. ",
      imageSrc: "/imgs/rdr2_game.jpg",
      prevPrice: "$ 99.99",
      price: "$ 85.99",
      platforms: ["steam.svg", "play.svg", "xbox.svg"],
    },
    {
      id: 42,
      url: "/imgs/batman_background.png",
      urlLarge: "/imgs/batman_large.png",
      backgroundPosition: "center",
      title: "BATMAN: ARKHAM KNIGHT",
      name: "Batman: Arkham Knight",
      description:
        "Con una narrativa envolvente, gráficos impresionantes y un excepcional sistema de combate, los jugadores exploran la ciudad caótica, resuelven intrincados acertijos y combaten amenazas icónicas.",
      imageSrc: "/imgs/batman.png",
      prevPrice: "$ 59.99",
      price: "$ 45.99",
      platforms: ["steam.svg", "play.svg", "xbox.svg"],
    },
    {
      id: 41,
      url: "/imgs/palworld_background.png",
      urlLarge: "/imgs/palworld_large.png",
      title: "PALWORLD",
      name: "Palworld",
      description:
        "Los jugadores controlan un avatar personalizable desde una perspectiva en tercera persona con el objetivo de explorar las islas Palpagos de mundo abierto y descubrir sus secretos.",
      imageSrc: "/imgs/palworld.jpg",
      prevPrice: "$ 39.99",
      price: "$ 19.99",
      platforms: ["steam.svg", "xbox.svg"],
    },
    {
      id: 40,
      url: "/imgs/hf_background.jpg",
      urlLarge: "/imgs/hf_background.jpg",
      title: "HALF-LIFE ALYX",
      name: "Half-Life Alyx",
      description:
        "Profundiza en la historia del universo de Half-Life y proporciona más contexto sobre los eventos que preceden a Half-Life 2. El juego ha sido elogiado por su inmersidad.",
      imageSrc: "/imgs/hf.png",
      prevPrice: "$ 25.99",
      price: "$ 10.99",
      platforms: ["steam.svg"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

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

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 6000);

  //   return () => clearInterval(interval);
  // }, [currentIndex]);

  return (
    <div className=" mb-36 h-full w-screen">
      <div
        style={{
          backgroundImage: `url(${
            isLargeScreen
              ? slider[currentIndex].urlLarge
              : slider[currentIndex].url
          })`,
          backgroundPosition:
            slider[currentIndex].backgroundPosition || "center",
          transition: "background-image 0.5s ease",
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
                      top-[60%]
                      z-40 -translate-y-[80%] translate-x-[-50%] transform text-center text-white lg:top-96"
        >
          <h2 className="mb-2 text-center text-xl font-bold lg:text-2xl">
            {slider[currentIndex].title}
          </h2>
          <p className="w-46 mb-3 text-center text-sm lg:mx-auto lg:text-lg">
            {slider[currentIndex].description}
          </p>
          <div className="mb-[-70%] bg-zinc-800 px-0 pb-36 lg:mx-[35%] lg:mb-[-20%] lg:pt-2">
            {slider[currentIndex].imageSrc && (
              <div
                className="-z-10 mx-auto h-56 w-48 shadow-xl lg:w-60 lg:pt-2"
                style={{
                  backgroundImage: `url(${slider[currentIndex].imageSrc})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className=" inset-0 bottom-0 pb-8  text-center text-white">
                  <h3 className="pt-[230px] text-xs lg:pt-56 lg:text-base lg:font-bold">
                    {slider[currentIndex].name}
                  </h3>
                  <p className="pr-28 pt-2 text-sm line-through lg:pr-40 lg:text-xs">
                    {slider[currentIndex].prevPrice}
                  </p>
                  <p className="pl-2 pr-28 text-lg font-bold text-green-500 lg:pr-36 lg:text-xl">
                    {slider[currentIndex].price}
                  </p>

                  <div className="ml-24 mt-[-30px] flex justify-center lg:ml-36">
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
                    className="mt-3 h-9 w-[90%] cursor-pointer
                 bg-gray-700 font-medium text-white hover:bg-white hover:text-primary lg:w-56 "
                  onClick={()=>{
                    addToCart(slider[currentIndex])
                  }}
                  >
                    Añadir al carrito
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
