import {
  LOADING,
  PDF_RETRIEVED,
  ERROR,
  CLEAR,
  PdfDispatchTypes,
} from "../type/pdfDispatchTypes";

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
      return { ...state, loading: action.payload };
    case PDF_RETRIEVED:
      return (state = initialState);
    case ERROR:
      return { ...state, loading: false, error: action.payload };
    case CLEAR:
      return (state = initialState);
    default:
      return state;
  }
};

export default pdfReducer;
