import React from "react";
import CartItem from "./CartItem";

export default function CartItems({ state, totalPrice, removeItem }) {
  return (
    <div className="w-full">
      <h3 className="font-semibold">Juegos seleccionados</h3>
      <div>
        {state.cartItems.map((cartItem, index) => {
          return (
            <CartItem key={index} cartItem={cartItem} removeItem={removeItem} />
          );
        })}
      </div>
      <div className="my-5 flex w-full justify-between px-2 text-xl font-extrabold">
        <h3>TOTAL: </h3>
        <h3>$ {totalPrice}</h3>
      </div>
    </div>
  );
}
