import { TYPES } from "../actions/TYPES";

export const shopReducer = (state, { type, payload }) => {
  switch (type) {
    case TYPES.READ_STATE: {
      return {
        ...state,
        products: [payload.products],
        cartItems: [payload.cartItems],
      };
    }
    default: {
    }
  }
};
