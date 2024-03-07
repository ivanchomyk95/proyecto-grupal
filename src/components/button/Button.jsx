import React from 'react';

const Boton = ({texto}) => {
  return (
    <button className="bg-[--color-primary] hover:bg-[--color-dark]
                          text-[--color-light] rounded-md w-[250px] h-[50px] font-[--font-family-subtitle]
                          text-lg transition-all duration-300 ease-in-out 
                          transform hover:scale-105">
                 {texto}
    </button>
  );
};

export default Boton;



