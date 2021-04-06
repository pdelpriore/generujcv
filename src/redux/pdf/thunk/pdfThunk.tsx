import { Dispatch } from "redux";
import {
  LOADING,
  PDF_RETRIEVED,
  ERROR,
  CLEAR,
  PdfDispatchTypes,
} from "../type/pdfDispatchTypes";
import { url } from "../../url/Url";
import { saveAs } from "file-saver";

export const getPdf = (data: string, title: string) => {
  return async (dispatch: Dispatch<PdfDispatchTypes>) => {
    dispatch({ type: LOADING, payload: true });
    try {
      const response = await fetch(url.GET_PDF, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: data, title: title }),
      });
      const pdf = await response.blob();
      if (pdf.size > 0) {
        dispatch({ type: PDF_RETRIEVED });
        saveAs(pdf, `${title}`);
      }
    } catch (err) {
      if (err)
        dispatch({
          type: ERROR,
          payload: "Problem z siecią. Spróbuj ponownie.",
        });
    }
  };
};

export const clearErrorState = () => {
  return (dispatch: Dispatch<PdfDispatchTypes>) => {
    dispatch({ type: CLEAR });
  };
};
