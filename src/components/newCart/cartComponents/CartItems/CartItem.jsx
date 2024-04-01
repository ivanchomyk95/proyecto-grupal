import React, { useContext } from "react";
import { buttonStyle } from "../../stylesShoppingCart";

export default function CartItem({ cartItem, index, removeItem }) {
  return (
    <div
      className="my-5 flex flex-col items-center justify-between text-lg font-semibold lg:flex-row"
      key={index}
    >
      <img className="h-20 w-20" src={cartItem.imageSrc} alt="" />
      <h3 className="mx-4">{cartItem.name}</h3>
      <div className="my-2 flex w-full justify-between lg:w-fit lg:flex-col-reverse lg:text-right">
        <button className={buttonStyle} onClick={() => removeItem(cartItem.id)}>
          Eliminar
        </button>
        <h3 className="text-lg">${cartItem.price}</h3>
      </div>
    </div>
  );
}
