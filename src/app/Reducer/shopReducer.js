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
    case TYPES.ADD_TO_CART: {
      console.log(payload);
      let newItem = payload;
      let itemInCart = state.cartItems.some((item) => item.id == newItem.id);
      return itemInCart
        ? {
            ...state,
          }
        : {
            ...state,
            cartItems: [
              ...state.cartItems,
              {
                newItem,
              },
            ],
          };
    }
    default: {
    }
  }
};
