import { Action } from "redux";
export interface ReduxActions extends Action<string | number> {
  payload: any;
}
