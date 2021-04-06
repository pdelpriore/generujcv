export const LOADING = "pdf_loading";
export const ERROR = "pdf_error";
export const CLEAR = "pdf_clear";

interface PdfLoadingInterface {
  type: typeof LOADING;
  payload: boolean;
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
  | PdfErrorInterface
  | PdfClearInterface;
