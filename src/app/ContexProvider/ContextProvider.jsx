"use client";
import { useReducer, createContext, useEffect } from "react";
import { shopReducer } from "../Reducer/shopReducer";
import { shopInitialState } from "../Reducer/ShopInitialState";
import { TYPES } from "@/app/actions/TYPES";
import axios from "axios";

export const ContextData = createContext();

export default function ContextDataPRovider({ children }) {
  const [state, dispatch] = useReducer(shopReducer, shopInitialState);

  const ENDPOINTS = {
    products: "http://localhost:5000/products",
    cartItems: "http://localhost:5000/cartItems",
  };

  const updateState = async () => {
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
  useEffect(() => {
    updateState();
  }, []);

  let totalPrice = state.cartItems
    .reduce((acc, cv) => {
      return Number(acc) + Number(cv.price);
    }, 0)
    .toFixed(2);

  //Dispatch Actions
  const addToCart = async (itemInfo) => {
    let newItem = state.products.find((product) => product.id == itemInfo.id);

    const OPTIONS = {
      method: "POST",
      headers: { "content-type": "application/json" },
      data: JSON.stringify(newItem),
    };
    console.log(newItem);

    if (newItem != undefined) {
      let itemInCart = state.cartItems.some((item) => item.id == newItem.id);
      if (!itemInCart) {
        await axios(ENDPOINTS.cartItems, OPTIONS);
      }
      dispatch({ type: TYPES.ADD_TO_CART });
    }
  };
  const removeItem = async (itemID) => {
    const ENDPOINT = `http://localhost:5000/cartItems/${itemID}`;
    await axios.delete(ENDPOINT);

    dispatch({ type: TYPES.REMOVE, payload: itemID });
  };
  const removeAll = async () => {
    state.cartItems.forEach((element) => {
      const ENDPOINT = `http://localhost:5000/cartItems/${element.id}`;
      axios.delete(ENDPOINT);
    });

    dispatch({ type: TYPES.REMOVE_ALL });
  };

  return (
    <ContextData.Provider
      value={{
        state,
        totalPrice,
        addToCart,
        removeItem,
        removeAll,
      }}
    >
      {children}
    </ContextData.Provider>
  );
}
