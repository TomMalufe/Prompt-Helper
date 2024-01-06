import { Component } from '@angular/core';
import { PromptTag } from '../shared/prompt';
import { Store, select } from '@ngrx/store';
import { selectNegativePrompts, selectPositivePrompts, selectPrompt } from '../store/selectors';
import { Actions } from '../store/actions';
import { clamp } from 'lodash';
import { promptTagToString } from '../shared/utils';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  positivePrompts$ = this.store.pipe<PromptTag[]>(select(selectPositivePrompts));
  negativePrompts$ = this.store.pipe<PromptTag[]>(select(selectNegativePrompts));

  promptTagToString = promptTagToString;

  constructor(private store: Store) {}

  removePrompt(tag: PromptTag): void {
    this.store.dispatch(Actions.removeFromPrompt(tag));
  }
  emphasise(tag: PromptTag, inc: number): void {
    this.store.dispatch(Actions.updateTagEmphasis({...tag, emphasis: clamp(tag.emphasis + inc, -3, 3)}));
  }
}
