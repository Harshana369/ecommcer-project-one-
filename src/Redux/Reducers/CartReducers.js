import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../Constants/CartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      // methanin balanawa paylode ekee ena deta tikata adala product eka
      //cart eke thiyanawada kiyala
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            // cart eke thiyana products eka eka aragena adala eka thoranawa
            // danata thiyana eka ain karala aluth eka add karanawa
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        // danatamath cart eke product ekak nathnam cart array ekata add wei
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };

    default:
      return state;
  }
};
