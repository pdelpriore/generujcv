import { Dispatch } from "redux";
import { LOADING, ERROR, PdfDispatchTypes } from "../type/pdfDispatchTypes";
import { url } from "../../url/Url";

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
      const responseData = await response.json();
      dispatch({ type: LOADING, payload: false });
      console.log(responseData);
    } catch (err) {
      if (err)
        dispatch({
          type: ERROR,
          payload: "Problem z siecią. Spróbuj ponownie.",
        });
    }
  };
};
