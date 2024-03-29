import { TYPES } from "../actions/TYPES";

export const shopReducer = (state, { type, payload }) => {
  switch (type) {
    case TYPES.READ_STATE: {
      return {
        ...state,
        products: [...payload.products],
        cartItems: [...payload.cartItems],
      };
    }
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find((product) => product.id == payload.id);

      if (newItem != undefined) {
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
                  ...newItem,
                },
              ],
            };
      }
    }
    case TYPES.REMOVE: {
      console.log("REMOVIDO POR FINNNN");
    }
    default: {
    }
  }
};
