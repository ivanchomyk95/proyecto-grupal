import React from "react";
import { buttonStyle } from "../../stylesShoppingCart";

export default function Product({ product, addToCart }) {
  return (
    <div className="my-5 flex flex-col">
      <div className="my-2 flex w-full justify-between px-2 font-semibold">
        <img className="h-10 w-10" src={product.imageSrc} alt="" />
        <h3 className="mx-4">{product.name}</h3>
        <h3>${product.price}</h3>
      </div>
      <button className={buttonStyle} onClick={() => addToCart(product)}>
        AÑADIR
      </button>
    </div>
  );
}
