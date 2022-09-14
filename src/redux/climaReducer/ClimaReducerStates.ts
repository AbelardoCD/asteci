import { Clima } from "./../../models/Clima";
export interface ClimaReducerStates {
  listClima: Clima[];
}

export enum ClimaReducerTypes {
  SET_CLIMA = "SET_CLIMA",
}
