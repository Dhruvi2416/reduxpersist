import { combineReducers } from "redux";
import { reducer } from "./reducers";
//combineReducer will combine every reduxcer in reducer.js and will sotre in rootReducer which will them be imported in store.js
const rootReducer = combineReducers({
  reducer: reducer,
});

export default rootReducer;
