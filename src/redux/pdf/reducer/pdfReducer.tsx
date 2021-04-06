import { LOADING, ERROR, PdfDispatchTypes } from "../type/pdfDispatchTypes";

interface PdfStateInterface {
  loading: boolean;
  error: string;
}

const initialState: PdfStateInterface = {
  loading: false,
  error: "",
};

const pdfReducer = (
  state = initialState,
  action: PdfDispatchTypes
): PdfStateInterface => {
  switch (action.type) {
    case LOADING:
      return { ...state, error: "", loading: action.payload };
    case ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default pdfReducer;
