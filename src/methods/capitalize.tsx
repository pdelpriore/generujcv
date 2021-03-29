const smallLetters = /[a-z]/;

export const capitalize = (text: string): string =>
  text
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export const capitalizeFirst = (text: string): string =>
  text.charAt(0).toUpperCase() + text.slice(1);

export const capitalizeLetters = (text: string): string =>
  text
    .split("")
    .map((char) => (smallLetters.test(char) ? char.toUpperCase() : char))
    .join("");
