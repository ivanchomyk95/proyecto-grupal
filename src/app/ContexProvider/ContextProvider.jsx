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
      slider: "http://localhost:5000/slider",
    };

    const responses = {
      products: await axios.get(ENDPOINTS.products),
      cartItems: await axios.get(ENDPOINTS.cartItems),
      slider: await axios.get(ENDPOINTS.slider),
    };

    const data = {
      products: await responses.products.data,
      cartItems: await responses.cartItems.data,
      slider: await responses.slider.data,
    };

    dispatch({ type: TYPES.READ_STATE, payload: data });
  };

  useEffect(() => {
    updateState();
  }, []);

  const addToCart = (itemInfo) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: itemInfo });
  };
  return (
    <ContextData.Provider value={{ state, updateState, addToCart }}>
      {children}
    </ContextData.Provider>
  );
}
