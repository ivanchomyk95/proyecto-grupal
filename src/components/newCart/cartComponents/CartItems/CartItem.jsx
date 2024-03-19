import Boton from "@/components/button/Button";
import React from "react";

export default function CartItem({ cartItem }) {
  return (
    <div>
      <div className="my-2 flex w-full justify-between px-2 font-semibold">
        <img className="h-10 w-10" src={cartItem.imageSrc} alt="" />
        <h3>{cartItem.name}</h3>
        {cartItem.price}
      </div>
      <button
        className="  font[--font-family-subtitle] rounded-md bg-[--color-primary] px-6 py-1 text-lg
text-[--color-light]  duration-300 hover:scale-105 hover:bg-[--color-dark]"
      >
        Eliminar
      </button>
    </div>
  );
}
