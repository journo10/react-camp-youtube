import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

export const configureStore = () => {
  return createStore(rootReducer, devToolsEnhancer());
};
