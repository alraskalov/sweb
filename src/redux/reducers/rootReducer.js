import { combineReducers } from "redux";
import vpsReducer from "./vpsReducer";

const rootReducer = combineReducers({
  vps: vpsReducer,
});

export default rootReducer;
