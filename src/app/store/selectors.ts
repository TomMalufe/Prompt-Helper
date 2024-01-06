import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StoreState } from './reducer';


export const selectFeature = createFeatureSelector<StoreState>('app');

export const selectPrompt = createSelector(
  selectFeature,
  (state: StoreState) => state.prompt || []
);
export const selectPositivePrompts = createSelector(
  selectFeature,
  (state: StoreState) => state.prompt.filter(it => !it.isNegative) || []
);
export const selectNegativePrompts = createSelector(
  selectFeature,
  (state: StoreState) => state.prompt.filter(it => it.isNegative) || []
);
export const selectSavedPrompts = createSelector(
  selectFeature,
  (state: StoreState) => state.savedPrompts.map(it => it.name) || []
);
export const selectCustomTags = createSelector(
  selectFeature,
  (state: StoreState) => state.customTags || []
);
export const selectHiddenTags = createSelector(
  selectFeature,
  (state: StoreState) => state.hiddenTags || []
);
