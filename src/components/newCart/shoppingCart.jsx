import React, { useContext, useEffect } from "react";
import Products from "./cartComponents/Products/Products";
import CartItems from "./cartComponents/CartItems/CartItems";
import { ContextData } from "@/app/ContexProvider/ContextProvider";

export default function ShoppingCart({ setIsVisible, isVisible }) {
  const { state, totalPrice } = useContext(ContextData);

  //shopping Modal Functions
  const handleClose = (e) => {
    if (e.target.id == "shopCart") {
      setIsVisible(!isVisible);
    }
  };
  return (
    <div
      className=" fixed inset-0 z-[100] w-full backdrop-blur-sm "
      id="shopCart"
      onClick={handleClose}
    >
      <div className="  mx-auto my-5 flex h-5/6 w-4/5 flex-col items-center overflow-y-scroll rounded-md bg-[--color-light] px-5 py-5 pb-16  opacity-95 lg:absolute lg:right-2 lg:w-1/2  ">
        <h2 className="">TUS COMPRAS</h2>
        {/* <Products state={state} /> */}
        <CartItems state={state} totalPrice={totalPrice} />
        <button
          onClick={() => {}}
          className="font[--font-family-subtitle] my-2 w-60 rounded-md bg-[--color-primary] px-6 py-1
text-lg  text-[--color-light] duration-300 hover:scale-105 hover:bg-[--color-dark]"
        >
          Comprar
        </button>
        <div className="ml-auto mr-0 mt-4 w-fit">
          <button
            onClick={() => {
              setIsVisible(!isVisible);
            }}
            className="  font[--font-family-subtitle] rounded-md bg-[--color-primary] px-6 py-1 text-lg
text-[--color-light]  duration-300 hover:scale-105 hover:bg-[--color-dark]"
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
}
