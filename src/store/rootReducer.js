//tüm stateleri topladığım yer burası unutma

import cartReducer from "./reducers/cartReducer";
import { combineReducers } from "redux"

const rootReducers = combineReducers({
  cart: cartReducer,
});
export default rootReducers;
