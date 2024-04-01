"use client";
import { useReducer, createContext, useEffect } from "react";
import { shopReducer } from "../Reducer/shopReducer";
import { shopInitialState } from "../Reducer/ShopInitialState";
import { TYPES } from "@/app/actions/TYPES";
import axios from "axios";

export const ContextData = createContext();

export default function ContextDataPRovider({ children }) {
  const [state, dispatch] = useReducer(shopReducer, shopInitialState);

  const updateState = async () => {
    const ENDPOINTS = {
      products: "http://localhost:5000/products",
      cartItems: "http://localhost:5000/cartItems",
    };
    try {
      const responses = {
        products: await axios.get(ENDPOINTS.products),
        cartItems: await axios.get(ENDPOINTS.cartItems),
      };

      const data = {
        products: await responses.products.data,
        cartItems: await responses.cartItems.data,
      };

      dispatch({ type: TYPES.READ_STATE, payload: data });
    } catch (e) {
      alert("Error al conectar al servidor, intente mas tarde. " + e.message);
      console.log(e);
    }
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
  const addToCart = (itemInfo) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: itemInfo });
  };

  const removeItem = (itemInfo) => {
    dispatch({ type: TYPES.REMOVE, payload: itemInfo });
  };
  const removeAll = () => {
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
