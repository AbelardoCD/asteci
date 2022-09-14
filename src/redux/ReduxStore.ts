import { combineReducers, createStore } from "redux";
import { ClimaReducer } from "./climaReducer/ClimaReducer";
const reducers = combineReducers({
  clima: ClimaReducer,
});

export const reduxStore = createStore(reducers);
