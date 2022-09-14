import { Clima } from "../../models/Clima";
import { ReduxActions } from "../ReduxActions";
import { ClimaReducerStates, ClimaReducerTypes } from "./ClimaReducerStates";

const initialStates: ClimaReducerStates = {
  listClima: [],
};

export const ClimaReducer = (
  states: ClimaReducerStates = initialStates,
  action: ReduxActions
) => {
  switch (action.type) {
    case ClimaReducerTypes.SET_CLIMA:
      return {
        ...states,
        listClima: action.payload,
      };

    default:
      return {
        ...states,
      };
  }
};
