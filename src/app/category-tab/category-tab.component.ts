import { Component, Input, OnInit } from '@angular/core';
import { PromptTag } from '../shared/prompt';
import { PromptValuesEnum } from '../shared/prompt-values-enum';
import { Store, select } from '@ngrx/store';
import { selectPrompt } from '../store/selectors';
import { Actions } from '../store/actions';

@Component({
  selector: 'app-category-tab',
  templateUrl: './category-tab.component.html',
  styleUrls: ['./category-tab.component.scss']
})
export class CategoryTabComponent implements OnInit {
  @Input()
  category: string = 'default';
  @Input()
  defaultPrompts: { [group: string]: string[] } = {};
  defaultCategories = Object.keys(this.defaultPrompts);

  prompt$ = this.store.pipe<PromptTag[]>(select(selectPrompt));

  searchValue = '';

  constructor(private store: Store) {}

  ngOnInit() {
    this.defaultCategories = Object.keys(this.defaultPrompts);
  }

  addRemoveDefaultPrompt(tag: string, value: PromptValuesEnum): void {
    switch (value) {
      case PromptValuesEnum.POSITIVE:
        this.store.dispatch(Actions.addToPrompt({ value: tag, isNegative: false }));
        break;
      case PromptValuesEnum.NEGATIVE:
        this.store.dispatch(Actions.addToPrompt({ value: tag, isNegative: true }));
        break;
      case PromptValuesEnum.NONE:
        this.store.dispatch(Actions.removeFromPrompt({ value: tag }));
        break;
    }
  }
  getItemList(item: string, prompt: PromptTag[]): string {
    const found = prompt.find((it) => it.value === item);
    if (found) {
      if (found.isNegative) {
        return PromptValuesEnum.NEGATIVE;
      }
      return PromptValuesEnum.POSITIVE;
    }
    return PromptValuesEnum.NONE;
  }
  search(prompts: string[]): string[] {
    const find = new RegExp(this.searchValue, 'i');
    return prompts.filter((it) => find.test(it));
  }
}
