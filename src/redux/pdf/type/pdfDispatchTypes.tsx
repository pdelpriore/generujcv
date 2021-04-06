export const LOADING = "pdf_loading";
export const ERROR = "pdf_error";

interface PdfLoadingInterface {
  type: typeof LOADING;
  payload: boolean;
}

interface PdfErrorInterface {
  type: typeof ERROR;
  payload: string;
}

export type PdfDispatchTypes = PdfLoadingInterface | PdfErrorInterface;
