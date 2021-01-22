export const RETRIEVED = "viewport_retrieved";
export const CLEAR = "viewport_clear";

export interface ViewportRetrieved {
  type: typeof RETRIEVED;
  payload: number;
}

export interface ViewportClear {
  type: typeof CLEAR;
}

export type ViewportDispatchType = ViewportRetrieved | ViewportClear;
