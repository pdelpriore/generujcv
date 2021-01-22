const daysFn = (): number[] => {
  const dayArray = [];

  for (let i = 1; i <= 31; i++) {
    dayArray.push(i);
  }

  return dayArray;
};

export const days: number[] = daysFn();

export const months: string[] = [
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

const yearNow = new Date().getFullYear();

const ExperienceYearFn = (): number[] => {
  const yearArray = [];

  for (let i = yearNow; i >= yearNow - 40; i--) {
    yearArray.push(i);
  }

  return yearArray;
};

export const ExperienceYear: number[] = ExperienceYearFn();

const SchoolYearFn = (): number[] => {
  const yearArray = [];

  for (let i = yearNow; i >= yearNow - 40; i--) {
    yearArray.push(i);
  }

  return yearArray;
};

export const SchoolYear: number[] = SchoolYearFn();

const birthdayYearFn = (): number[] => {
  const yearArray = [];

  for (let i = yearNow; i >= yearNow - 60; i--) {
    yearArray.push(i);
  }

  return yearArray;
};

export const birthdayYear: number[] = birthdayYearFn();
