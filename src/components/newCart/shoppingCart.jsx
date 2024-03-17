import React, { useEffect, useReducer } from "react";
import axios from "axios";
import Products from "./cartComponents/Products/Products";
import CartItems from "./cartComponents/CartItems/CartItems";
import { shopInitialState } from "@/app/Reducer/ShopInitialState";
import { TYPES } from "@/app/actions/TYPES";
import { shopReducer } from "@/app/Reducer/shopReducer";

export default function ShoppingCart({ setIsVisible, isVisible }) {
  const [state, dispatch] = useReducer(shopReducer, shopInitialState);

  const updateState = async () => {
    const ENDPOINTS = {
      products: "http://localhost:5000/productos",
      cartItems: "http://localhost:5000/cart",
    };

    const responses = {
      products: await axios.get(ENDPOINTS.products),
      cartItems: await axios.get(ENDPOINTS.cartItems),
    };

    const data = {
      products: await responses.products.data,
      cartItems: await responses.cartItems.data,
    };

    dispatch({ type: TYPES.READ_STATE, payload: data });
  };
  console.log(state);
  useEffect(() => {
    updateState();
  }, []);

  //shopping Modal Functions
  const handleClose = (e) => {
    if (e.target.id == "shopCart") {
      setIsVisible(!isVisible);
    }
  };
  return (
    <div
      className=" fixed inset-0 w-full  backdrop-blur-sm"
      id="shopCart"
      onClick={handleClose}
    >
      <div className=" mx-auto my-7 w-4/5  rounded-md bg-[--color-light] p-2 lg:absolute lg:right-2 lg:w-1/2  ">
        <h2 className="">TUS COMPRAS</h2>
        <Products state={state} />
        <CartItems />
        <div className="">
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
