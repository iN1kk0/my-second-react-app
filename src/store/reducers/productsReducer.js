import * as constants from "../constants/products";

const initialState = {
  items: [
    { id: "1", name: "PS5", price: 750, count: 0 },
    { id: "2", name: "Xbox", price: 650, count: 0 },
    { id: "3", name: "RTX3090", price: 3000, count: 0 },
  ],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.ADD_PRODUCT:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              count: item.count + 1,
            };
          }

          return item;
        }),
      };

    case constants.REMOVE_PRODUCT:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              count: item.count - 1,
            };
          }

          return item;
        }),
      };

    default:
      return state;
  }
};
