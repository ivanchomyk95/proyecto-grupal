"use client";
import { useReducer, createContext, useEffect, useState } from "react";
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

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let totalPrice = state.cartItems.reduce((acc, cv) => {
      return Number(acc) + Number(cv.price);
    }, 0);
    setTotalPrice(totalPrice);
  }, [state]);

  //Dispatch Actions
  const addToCart = (itemInfo) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: itemInfo });
  };

  const [isRemoved, setIsRemoved] = useState(false);
  useEffect(() => {
    const removeItem = (itemInfo) => {
      dispatch({ type: TYPES.REMOVE, payload: itemInfo });
    };
    if (isRemoved) {
      removeItem();
    }
  }, [isRemoved]);

  return (
    <ContextData.Provider
      value={{ state, totalPrice, addToCart, setIsRemoved }}
    >
      {children}
    </ContextData.Provider>
  );
}
