import React, { useState, useEffect } from "react";
import { GrCart } from "react-icons/gr";
import clsx from "clsx";

//Animación Scroll del Navbar

const Header = ({ isVisible, setIsVisible }) => {
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
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className="w-full">
      <div
        className={clsx(
          "fixed  top-0 z-50  flex  w-full items-center  justify-between px-2  pb-16 transition-all duration-300 ",
          scrollingUp && prevScrollPos !== 0
            ? "bg-white text-black shadow-md"
            : "bg-transparent text-white",
          visible ? "" : "-translate-y-full",
        )}
      >
        <div id="logo-container" className=" -my-8 w-60  lg:w-80">
          <img
            className="z-40"
            src={
              scrollingUp && prevScrollPos !== 0 ? "logo-1.svg" : "logo-2.svg"
            }
            style={{ backgroundColor: "transparent" }}
            alt="Logo Game"
          />
        </div>
        <div
          id="menu-car-container"
          className="flex items-center justify-center px-2"
        >
          <div id="menu-container" className="hidden lg:block">
            <a href="#" className="mr-10 text-xl font-bold hover:text-primary">
              Inicio
            </a>
            <a href="#" className="mr-10 text-xl font-bold hover:text-primary">
              Productos
            </a>
            <a href="#" className="mr-10 text-xl font-bold hover:text-primary">
              Conócenos
            </a>
            <a href="#" className="mr-10 text-xl font-bold hover:text-primary">
              Contacto
            </a>
          </div>
          <div
            id="carrito-container"
            className=" ml-[76%] cursor-pointer text-white lg:right-36 lg:ml-0"
          >
            <GrCart
              size={25}
              className={clsx(
                scrollingUp && prevScrollPos !== 0
                  ? "text-black"
                  : "text-white",
                "lg:size-7",
                "hover:text-primary",
              )}
              onClick={() => {
                setIsVisible(!isVisible);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
