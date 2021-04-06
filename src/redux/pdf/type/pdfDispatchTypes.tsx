export const LOADING = "pdf_loading";
export const PDF_RETRIEVED = "pdf_retrieved";
export const ERROR = "pdf_error";
export const CLEAR = "pdf_clear";

interface PdfLoadingInterface {
  type: typeof LOADING;
  payload: boolean;
}

interface PdfRetrievedInterface {
  type: typeof PDF_RETRIEVED;
}

interface PdfErrorInterface {
  type: typeof ERROR;
  payload: string;
}

interface PdfClearInterface {
  type: typeof CLEAR;
}

export type PdfDispatchTypes =
  | PdfLoadingInterface
  | PdfRetrievedInterface
  | PdfErrorInterface
  | PdfClearInterface;
