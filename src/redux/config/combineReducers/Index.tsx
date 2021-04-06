import { combineReducers } from "redux";
import viewportReducer from "../../viewport/reducer/viewportReducer";
import pdfReducer from "../../pdf/reducer/pdfReducer";

const allReducers = combineReducers({
  viewportState: viewportReducer,
  pdfState: pdfReducer,
});

export default allReducers;
