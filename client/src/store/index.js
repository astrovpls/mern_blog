import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

export const initialState = {};

export const middlewares = [reduxThunk];
export const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(...middlewares))(createStore)

const store = createStoreWithMiddleware(
  reducers,
  initialState
);

export default store;
