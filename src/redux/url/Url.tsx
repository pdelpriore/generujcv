interface Url {
  GET_PDF: string;
}

export const url: Readonly<Url> = Object.freeze({
  GET_PDF: "http://127.0.0.1:4000/getpdf",
});
