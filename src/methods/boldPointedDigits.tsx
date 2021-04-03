const pointedDigits = /\d\./;

export const boldPointedDigits = (text: string): string =>
  text
    .split(" ")
    .map((word) => (word.match(pointedDigits) ? word.bold() : word))
    .join(" ");
