import {
  RETRIEVED,
  CLEAR,
  ViewportDispatchType,
} from "../type/viewportDispatchType";

interface ViewportState {
  viewport: number;
}

const initState: ViewportState = {
  viewport: 0,
};

const viewportReducer = (
  state = initState,
  action: ViewportDispatchType
): ViewportState => {
  switch (action.type) {
    case RETRIEVED:
      return {
        ...state,
        viewport: action.payload,
      };
    case CLEAR:
      return (state = initState);
    default:
      return state;
  }
};

export default viewportReducer;
