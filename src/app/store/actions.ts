import { createAction, props } from '@ngrx/store';
import { PromptTag } from '../shared/prompt';
import { Tag } from '../shared/tag';

const addTag = createAction('Add new tag', props<Tag>());
const removeTag = createAction('Remove tag', props<Tag>());
const restoreTag = createAction('Restore hidden tag', props<Tag>());

const addToPrompt = createAction('Add tag to prompt', props<{ value: string; isNegative: boolean }>());
const removeFromPrompt = createAction('Remove tag from prompt', props<{ value: string }>());
const clearPrompt = createAction('Clear prompt');

const updateTagEmphasis = createAction('Update tag emphasis', props<PromptTag>());

const savePrompt = createAction('Save current prompt', props<{ name: string }>());
const loadPrompt = createAction('Load saved prompt', props<{ name: string }>());
const deleteSavedPrompt = createAction('Delete saved prompt', props<{ name: string }>());

export const Actions = {
  addTag,
  removeTag,
  restoreTag,

  addToPrompt,
  removeFromPrompt,
  clearPrompt,

  updateTagEmphasis,

  savePrompt,
  loadPrompt,
  deleteSavedPrompt
};
