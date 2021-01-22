import { Dispatch } from "redux";
import {
  RETRIEVED,
  CLEAR,
  ViewportDispatchType,
} from "../type/viewportDispatchType";

export const setViewport = (value: number) => (
  dispatch: Dispatch<ViewportDispatchType>
) =>
  dispatch({
    type: RETRIEVED,
    payload: value,
  });

export const clearViewport = () => (dispatch: Dispatch<ViewportDispatchType>) =>
  dispatch({ type: CLEAR });
