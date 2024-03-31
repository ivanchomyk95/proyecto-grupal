import React from "react";

const Boton = ({ texto, handleAddToCart }) => {
  return (
    <button
      className="h-[50px] w-[250px]
                          transform rounded-md bg-[--color-primary] text-lg font-[--font-family-subtitle]
                          text-[--color-light] transition-all duration-300 ease-in-out 
                          hover:scale-105 hover:bg-[--color-dark]"
      onClick={handleAddToCart}
    >
      {texto}
    </button>
  );
};

export default Boton;
