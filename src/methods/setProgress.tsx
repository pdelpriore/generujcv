export const setProgress = (level: number, circumference: number): number => {
  const percent = Math.round((level * 100) / 6);
  return circumference - (percent / 100) * circumference;
};
