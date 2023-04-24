import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { createLogger } from "redux-logger";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const logger = createLogger();
const persistConfig = {
  key: "root",
  storage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(logger));

export default store;
