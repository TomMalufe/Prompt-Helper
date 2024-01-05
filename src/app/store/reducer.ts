import { createReducer, on } from '@ngrx/store';
import { Prompt } from '../shared/prompt';
import { Tag } from '../shared/tag';
import { Actions } from './actions';

interface StoreState {
  prompt: Prompt[];
  savedPrompts: {
    name: string;
    prompt: Prompt[];
  }[];
  customTags: Tag[];
  hiddenTags: Tag[];
}

export const initialState: StoreState = {
  prompt: [],
  savedPrompts: [],
  customTags: [],
  hiddenTags: []
};

export const appReducer = createReducer(
  initialState,
  on(Actions.addTag, (state, tag) => ({
    ...state,
    customTags: [...state.customTags, tag]
  })),
  on(Actions.removeTag, (state, tag) => {
    const index = state.customTags.findIndex(
      (it) => it.value === tag.value && it.category === tag.category && it.subCategory === tag.subCategory
    );
    if (index >= 0) {
      state.customTags.splice(index, 1);
      return { ...state };
    }
    return { ...state, hiddenTags: [...state.hiddenTags, tag] };
  }),
  on(Actions.restoreTag, (state, tag) => {
    const index = state.hiddenTags.findIndex(
      (it) => it.value === tag.value && it.category === tag.category && it.subCategory === tag.subCategory
    );
    if (index >= 0) {
      state.hiddenTags.splice(index, 1);
    }
    return { ...state };
  }),

  on(Actions.addToPrompt, (state, { value, isNegative }) => ({
    ...state,
    prompt: [...state.prompt, Prompt.create(value, isNegative)]
  })),
  on(Actions.removeFromPrompt, (state) => ({ ...state, customTags: [] })),

  on(Actions.updateTagEmphasis, (state) => ({ ...state, customTags: [] })),

  on(Actions.savePrompt, (state) => ({ ...state, customTags: [] })),
  on(Actions.loadPrompt, (state) => ({ ...state, customTags: [] })),
  on(Actions.deleteSavedPrompt, (state) => ({ ...state, customTags: [] }))
);
