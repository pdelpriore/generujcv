const daysFn = (): string[] => {
  const dayArray: string[] = [];

  for (let i = 1; i <= 31; i++) {
    dayArray.concat(i < 10 ? `0${i}` : i.toString());
  }

  return dayArray;
};

export const days: string[] = daysFn();

const monthsFn = (): string[] => {
  const monthArray: string[] = [];

  for (let i = 1; i <= 12; i++) {
    monthArray.concat(i < 10 ? `0${i}` : i.toString());
  }

  return monthArray;
};

export const months: string[] = monthsFn();

const yearNow = new Date().getFullYear();

const experienceYearFn = (): number[] => {
  const yearArray: number[] = [];

  for (let i = yearNow; i >= yearNow - 40; i--) {
    yearArray.concat(i);
  }

  return yearArray;
};

export const experienceYear: number[] = experienceYearFn();

const schoolYearFn = (): number[] => {
  const yearArray: number[] = [];

  for (let i = yearNow; i >= yearNow - 40; i--) {
    yearArray.concat(i);
  }

  return yearArray;
};

export const schoolYear: number[] = schoolYearFn();

const birthdayYearFn = (): number[] => {
  const yearArray: number[] = [];

  for (let i = yearNow; i >= yearNow - 60; i--) {
    yearArray.concat(i);
  }

  return yearArray;
};

export const birthdayYear: number[] = birthdayYearFn();
