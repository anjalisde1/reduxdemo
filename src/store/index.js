import { createStore, combineReducers } from "redux";
import bookReducer from "./storeReducer";

const rootReducer = combineReducers({
  books: bookReducer
});

 export const store = createStore(rootReducer);

