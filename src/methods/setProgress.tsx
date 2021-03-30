export const setProgress = (
  level: number,
  maxLevel: number,
  circumference: number
): number => {
  const percent = Math.round((level * 100) / maxLevel);
  return circumference - (percent / 100) * circumference;
};
