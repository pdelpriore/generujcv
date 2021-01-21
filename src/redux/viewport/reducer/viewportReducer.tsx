import {
  RETRIEVED,
  CLEAR,
  ViewportDispatchType,
} from "../type/viewportDispatchType";

type value = {
  [key: string]: number;
};

interface Viewport {
  [key: string]: value;
}

interface ViewportState {
  viewport: Viewport;
}

const initState: ViewportState = {
  viewport: { app: { value: 0 } },
};

const viewportReducer = (
  state = initState,
  action: ViewportDispatchType
): ViewportState => {
  switch (action.type) {
    case RETRIEVED:
      return {
        ...state,
        viewport: {
          [action.payload.component]: { value: action.payload.value },
        },
      };
    case CLEAR:
      return (state = initState);
    default:
      return state;
  }
};

export default viewportReducer;
