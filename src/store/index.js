import { createStore, combineReducers } from "redux";
import { productsReducer } from "./reducers/productsReducer";
import { themeReducer } from "./reducers/themeReducer";

const rootReducer = combineReducers({ productsReducer, themeReducer });

const store = createStore(rootReducer);

export default store;
