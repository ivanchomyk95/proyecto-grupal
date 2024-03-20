import { TYPES } from "../actions/TYPES";

export const shopReducer = (state, { type, payload }) => {
  switch (type) {
    case TYPES.READ_STATE: {
      return {
        ...state,
        products: [...state.products, ...payload.products],
        cartItems: [...payload.cartItems],
        slider: [...payload.slider],
      };
    }
    default: {
    }
  }
};
