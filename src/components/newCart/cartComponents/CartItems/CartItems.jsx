import React, { useContext } from "react";
import CartItem from "./CartItem";
import { ContextData } from "@/app/ContexProvider/ContextProvider";

export default function CartItems() {
  const { state, totalPrice, removeItem } = useContext(ContextData);

  return (
    <div className="w-full">
      <div>
        <h3 className="w-full text-center font-semibold">
          Juegos seleccionados
        </h3>
        {state.cartItems.map((cartItem, index) => {
          return (
            <CartItem key={index} removeItem={removeItem} cartItem={cartItem} />
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
