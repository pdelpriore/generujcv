export const RETRIEVED = "viewport_retrieved";
export const CLEAR = "viewport_clear";

interface ViewportRetrieved {
  type: typeof RETRIEVED;
  payload: number;
}

interface ViewportClear {
  type: typeof CLEAR;
}

export type ViewportDispatchType = ViewportRetrieved | ViewportClear;
