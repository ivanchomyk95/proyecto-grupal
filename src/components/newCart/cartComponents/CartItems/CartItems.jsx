import React from "react";
import CartItem from "./CartItem";

export default function CartItems({ state }) {
  return (
    <div>
      <h3 className="font-semibold">Juegos seleccionados</h3>
      <div>
        {state.cartItems.map((cartItem) => {
          return <CartItem cartItem={cartItem} />;
        })}
      </div>
    </div>
  );
}
