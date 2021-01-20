const daysFn = () => {
  const dayArray = [];

  for (let i = 1; i <= 31; i++) {
    dayArray.push(i);
  }

  return dayArray;
};

export const days = daysFn();

export const months = [
  "styczeń",
  "luty",
  "marzec",
  "kwiecień",
  "maj",
  "czerwiec",
  "lipiec",
  "sierpień",
  "wrzesień",
  "październik",
  "listopad",
  "grudzień",
];

const yearFn = () => {
  const yearNow = new Date().getFullYear();
  const yearArray = [];

  for (let i = yearNow; i >= yearNow - 15; i--) {
    yearArray.push(i);
  }

  return yearArray;
};

export const year = yearFn();
