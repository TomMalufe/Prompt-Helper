import { PromptTag } from "./prompt";

export const clamp = (value: number, min: number, max: number = Number.MAX_VALUE) =>
  Math.min(Math.max(value, min), max);

  
export const promptTagToString = (tag: PromptTag): string => {
    if (tag.emphasis > 0) {
      return '('.repeat(tag.emphasis) + tag.value + ')'.repeat(tag.emphasis);
    }
    if (tag.emphasis < 0) {
      return '['.repeat(-1 * tag.emphasis) + tag.value + ']'.repeat(-1 * tag.emphasis);
    }
    return tag.value;
  }