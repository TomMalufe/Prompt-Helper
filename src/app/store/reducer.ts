import { ActionReducer, createReducer, on } from '@ngrx/store';
import { Tag } from '../shared/tag';
import { Actions } from './actions';
import { PromptTag } from '../shared/prompt';

export interface StoreState {
  prompt: PromptTag[];
  savedPrompts: {
    name: string;
    prompt: PromptTag[];
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

export const appReducer = createReducer<StoreState, any, ActionReducer<StoreState, any>>(
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
  on(Actions.restoreTag, (state, tag) => ({
    ...state,
    hiddenTags: state.hiddenTags.filter(
      (it) => !(it.value === tag.value && it.category === tag.category && it.subCategory === tag.subCategory)
    )
  })),

  on(Actions.addToPrompt, (state, { value, isNegative }) => ({
    ...state,
    prompt: [...state.prompt, { value, isNegative, emphasis: 0 }]
  })),
  on(Actions.removeFromPrompt, (state, { value }) => ({
    ...state,
    prompt: state.prompt.filter((it) => it.value !== value)
  })),
  on(Actions.clearPrompt, (state) => ({ ...state, prompt: [] })),

  on(Actions.updateTagEmphasis, (state, tag) => ({
    ...state,
    prompt: state.prompt.map((it) => (it.value === tag.value ? tag : it))
  })),

  on(Actions.savePrompt, (state, { name }) => ({
    ...state,
    savedPrompts:
      state.savedPrompts.findIndex((it) => it.name === name) < 0
        ? [...state.savedPrompts, { name, prompt: state.prompt }]
        : state.savedPrompts.map((it) => (it.name === name ? { name, prompt: state.prompt } : it))
  })),
  on(Actions.loadPrompt, (state, { name }) => ({
    ...state,
    prompt: state.savedPrompts.find((it) => it.name === name)?.prompt || state.prompt
  })),
  on(Actions.deleteSavedPrompt, (state, { name }) => ({
    ...state,
    savedPrompts: state.savedPrompts.filter((it) => it.name !== name)
  }))
);
