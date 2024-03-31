import React, { useContext } from "react";
import Product from "./product";
import { ContextData } from "@/app/ContexProvider/ContextProvider";

export default function Products() {
  const { state, addToCart } = useContext(ContextData);

  let randomProduct = Math.trunc(Math.random() * state.products.length);

  return (
    <div className="w-fit">
      <h3 className="text-center font-semibold">Añade un juego</h3>
      <div>
        {
          <Product
            product={state.products[randomProduct]}
            addToCart={addToCart}
          />
        }
      </div>
      {state.cartItems.length < 2 && (
        <Product
          product={state.products[randomProduct + 1]}
          addToCart={addToCart}
        />
      )}

      <hr />
    </div>
  );
}
