import React, { useContext, useState } from "react";
import CartItems from "./cartComponents/CartItems/CartItems";
import Products from "./cartComponents/Products/Products";
import { ContextData } from "@/app/ContexProvider/ContextProvider";
import { buttonStyle, shopContainerStyle } from "./stylesShoppingCart";

export default function ShoppingCart({ setIsVisible, isVisible }) {
  const { removeAll, totalPrice } = useContext(ContextData);
  const [confirmBuy, setConfirmBuy] = useState(false);
  //shopping Modal Functions
  const handleClose = (e) => {
    if (e.target.id == "shopCart") {
      setIsVisible(!isVisible);
    }
  };
  const handleConfirmBuy = () => {
    if (totalPrice > 0) {
      setConfirmBuy(!confirmBuy);
    } else {
      alert("EL carrito esta vacío");
    }
  };

  return (
    <div
      className=" fixed inset-0 z-[100] w-full backdrop-blur-sm "
      id="shopCart"
      onClick={handleClose}
    >
      <div id="shop-container" className={shopContainerStyle}>
        <h2 className="mb-3 text-center font-bold leading-10">TUS COMPRAS</h2>
        <div className="my-2 mb-5 flex w-full justify-center rounded-3xl bg-green-300 bg-opacity-20 pt-2">
          {<Products />}
        </div>
        <CartItems />
        {!confirmBuy ? (
          <button onClick={() => handleConfirmBuy()} className={buttonStyle}>
            Comprar
          </button>
        ) : (
          <div className="flex flex-col rounded-lg bg-green-300 bg-opacity-40 p-3 text-center">
            <p>
              Confirmar compra por <b>${totalPrice}</b>
            </p>
            <button
              className={buttonStyle}
              onClick={() => {
                setConfirmBuy(!confirmBuy);
                removeAll();
              }}
            >
              Confirmar
            </button>
          </div>
        )}

        <div className="mt-4 flex w-full justify-between">
          <button onClick={() => removeAll()} className={buttonStyle}>
            Borrar Todo
          </button>
          <button
            onClick={() => {
              setIsVisible(!isVisible);
            }}
            className={buttonStyle}
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
}
