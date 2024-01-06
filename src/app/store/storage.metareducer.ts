import { ActionReducer, Action, MetaReducer } from '@ngrx/store';
import { initialState } from './reducer';
import { pick, merge } from 'lodash';
import { AppState } from '../app.module';

function setSavedState(state: any, localStorageKey: string) {
  window.localStorage.setItem(localStorageKey, JSON.stringify(state));
}
function getSavedState(localStorageKey: string): any {
  const stored = window.localStorage.getItem(localStorageKey);
  if (stored) {
    return JSON.parse(stored);
  }
  return {app: initialState};
}


// the keys from state which we'd like to save.
const stateKeys = ['app.prompt', 'app.savedPrompts', 'app.hiddenTags', 'app.customTags'];
// the key for the local storage.
const localStorageKey = 'prompt_helper_storage';

export function storageMetareducer(reducer: ActionReducer<AppState, Action>) {
  let onInit = true; // after load/refresh…
  return function (state: AppState, action: Action): AppState {
    console.log(action.type);
    // reduce the nextState.
    const nextState = reducer(state, action);
    // init the application state.
    if (onInit) {
      onInit = false;
      const savedState = getSavedState(localStorageKey);
      return merge(nextState, savedState);
    }
    // save the next state to the application storage.
    const stateToSave = pick(nextState, stateKeys);
    setSavedState(stateToSave, localStorageKey);
    return nextState;
  };
}
 
export const metaReducers: MetaReducer<any>[] = [storageMetareducer];
