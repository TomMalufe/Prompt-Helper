import { Prompt } from './prompt';

interface PromptSet {
  attire?: Prompt[];
  body?: Prompt[];
  composition?: Prompt[];
  expression?: Prompt[];
  face?: Prompt[];
  hair?: Prompt[];
  pose?: Prompt[];
}

export interface SavedPrompts {
  name: string;
  positive: PromptSet;
  negative: PromptSet;
}
