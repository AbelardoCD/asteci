import { useSelector, useDispatch } from "react-redux";
import { Clima } from "../../models/Clima";
import { ReduxPackages } from "../ReduxPackages";
import { ClimaReducerTypes } from "./ClimaReducerStates";

export const useClimaReducers = () => {
  const reducerStatet = useSelector(({ clima }: ReduxPackages) => clima);

  const { listClima } = reducerStatet;

  const dispach = useDispatch();
  const setClima = (payload: Clima[]) => {
    dispach({
      type: ClimaReducerTypes.SET_CLIMA,
      payload,
    });
  };

  return {
    listClima,
    setClima,
  };
};
