import { createStore } from "redux";
import * as constants from "./constants/products";

const initialState = {
  items: [
    { id: "#1", name: "PS5", price: 750, count: 0 },
    { id: "#2", name: "Xbox", price: 650, count: 0 },
    { id: "#3", name: "GeForce RTX 3090", price: 3000, count: 0 },
  ],
};

function myReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case constants.ADD_PRODUCT:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === payload.id) {
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
          if (item.id === payload.id) {
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
}

export default createStore(myReducer);