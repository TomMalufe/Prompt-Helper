export const clamp = (value: number, min: number, max: number = Number.MAX_VALUE) =>
  Math.min(Math.max(value, min), max);
