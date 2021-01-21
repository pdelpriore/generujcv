import { Dispatch } from "redux";
import {
  RETRIEVED,
  CLEAR,
  ViewportDispatchType,
} from "../type/viewportDispatchType";

export const setViewport = (component: string, value: number) => (
  dispatch: Dispatch<ViewportDispatchType>
) =>
  dispatch({
    type: RETRIEVED,
    payload: { component: component, value: value },
  });

export const clearViewport = () => (dispatch: Dispatch<ViewportDispatchType>) =>
  dispatch({ type: CLEAR });
