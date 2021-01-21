export const RETRIEVED = "viewport_retrieved";
export const CLEAR = "viewport_clear";

interface Payload {
  component: string;
  value: number;
}

export interface ViewportRetrieved {
  type: typeof RETRIEVED;
  payload: Payload;
}

export interface ViewportClear {
  type: typeof CLEAR;
}

export type ViewportDispatchType = ViewportRetrieved | ViewportClear;
