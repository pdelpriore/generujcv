const daysFn = (): string[] => {
  const dayArray = [];

  for (let i = 1; i <= 31; i++) {
    dayArray.push(i < 10 ? `0${i}` : i.toString());
  }

  return dayArray;
};

export const days: string[] = daysFn();

const monthsFn = (): string[] => {
  const monthArray = [];

  for (let i = 1; i <= 12; i++) {
    monthArray.push(i < 10 ? `0${i}` : i.toString());
  }

  return monthArray;
};

export const months: string[] = monthsFn();

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
