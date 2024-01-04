import { Prompt } from './prompt';

export interface SavedPrompts {
  name: string;
  positive: Prompt[];
  negative: Prompt[];
}
