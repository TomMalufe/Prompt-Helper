import { ActionReducer, Action } from '@ngrx/store';
import { merge, pick } from 'lodash-es';
import { initialState } from './reducer';

function setSavedState(state: any, localStorageKey: string) {
  localStorage.setItem(localStorageKey, JSON.stringify(state));
}
function getSavedState(localStorageKey: string): any {
  const stored = localStorage.getItem(localStorageKey);
  if (stored) {
    return JSON.parse(stored);
  }
  return initialState;
}

// the keys from state which we'd like to save.
const stateKeys = ['layout.theme'];
// the key for the local storage.
const localStorageKey = '__prompt_helper_storage__';

export function storageMetareducer<S, A extends Action = Action>(reducer: ActionReducer<S, A>) {
  let onInit = true; // after load/refresh…
  return function (state: S, action: A): S {
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
