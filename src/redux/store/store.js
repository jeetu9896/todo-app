import { applyMiddleware, createStore } from "redux";
import todoReducer from "../reducers/reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(todoReducer, composeWithDevTools(applyMiddleware()));
console.log('first', store.getState())
export default store;
