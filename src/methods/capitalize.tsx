const onlyLetters = /[a-zA-Z]/;

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
    .map((char) => (onlyLetters.test(char) ? char.toUpperCase() : char))
    .join("");
