import { TYPES } from "../actions/TYPES";

export const shopReducer = (state, { type, payload }) => {
  switch (type) {
    case TYPES.READ_STATE: {
      return {
        ...state,
        products: payload.products,
        cartItems: payload.cartItems,
      };
    }
    case TYPES.ADD_TO_CART: {
      return {
        ...state,
      };
    }
    case TYPES.REMOVE: {
      return {
        ...state,
      };
    }
    case TYPES.REMOVE_ALL: {
      return {
        ...state,
      };
    }

    default: {
    }
  }
};
