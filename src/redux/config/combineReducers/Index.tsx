import { combineReducers } from "redux";
import viewportReducer from "../../viewport/reducer/viewportReducer";

const allReducers = combineReducers({
  viewportState: viewportReducer,
});

export default allReducers;
