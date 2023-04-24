import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { createLogger } from "redux-logger";
import storage from "redux-persist/lib/storage"; //by default localStorage
import { persistReducer } from "redux-persist";

const logger = createLogger(); //will continously listen to any change in redux state
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
//passed persistedReducer to store
const store = createStore(persistedReducer, applyMiddleware(logger));

export default store;
