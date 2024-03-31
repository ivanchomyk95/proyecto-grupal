import React, { useState, useEffect } from "react";
import { GrCart } from "react-icons/gr";
import clsx from "clsx";


//Animación Scroll del Navbar

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [scrollingUp, setScrollingUp] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setScrollingUp(prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);


    setVisible(currentScrollPos === 0 || scrollingUp);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div>
         <div
  className={clsx(
    "xl:flex justify-end items-center fixed top-0 right-0 left-0 pr-52 pb-16 lg:pb-8 z-50 transition-all duration-300",
    scrollingUp && prevScrollPos !== 0
      ? "bg-white text-black shadow-md"
      : "bg-transparent text-white",
    visible ? "" : "-translate-y-full"
  )}
>
  <div className="absolute left-0 top-0 mt-[-7%] w-60 lg:mt-[-2%] lg:w-80">
    <img
      className="z-40"
      src={scrollingUp && prevScrollPos !== 0 ? "logo-1.svg" : "logo-2.svg"}
      style={{ backgroundColor: "transparent" }}
      alt="Logo Game"
    />
  </div>

        <div className="absolute ml-[76%] top-6 cursor-pointer text-white lg:right-36 lg:ml-0">
          <GrCart
            size={25}
            className={clsx(scrollingUp && prevScrollPos !== 0 ? 'text-black' : 'text-white', "lg:size-7", "hover:text-primary")}
            onClick={() => {
              setIsVisible(!isVisible);
            }}
          />
        </div>
            <div className="lg:block hidden mt-7">
            <a href="#" className="mr-10 text-xl font-bold hover:text-primary">Inicio</a>
        <a href="#" className="mr-10 text-xl font-bold hover:text-primary">Productos</a>
        <a href="#" className="mr-10 text-xl font-bold hover:text-primary">Conócenos</a>
        <a href="#" className="mr-10 text-xl font-bold hover:text-primary">Contacto</a>
            </div>
        
      </div>
    </div>
  );
}

export default Header;
