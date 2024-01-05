import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Prompt } from '../shared/prompt';
import { PromptValuesEnum } from '../shared/prompt-values-enum';
import { clamp } from '../shared/utils';

@Component({
  selector: 'app-category-tab',
  templateUrl: './category-tab.component.html',
  styleUrls: ['./category-tab.component.scss']
})
export class CategoryTabComponent implements OnInit {
  @Input()
  defaultPrompts: { [group: string]: Prompt[] } = {};
  defaultCategories = Object.keys(this.defaultPrompts);

  @Input()
  positivePrompts: Prompt[] = [];
  @Input()
  negativePrompts: Prompt[] = [];

  @Output()
  updatePrompt = new EventEmitter<{ prompt: Prompt; value: PromptValuesEnum }>();

  searchValue = '';

  ngOnInit() {
    this.defaultCategories = Object.keys(this.defaultPrompts);
  }

  addRemoveDefaultPrompt(prompt: Prompt, value: PromptValuesEnum): void {
    this.updatePrompt.emit({ prompt, value });
  }
  getItemList(item: Prompt): string {
    if (this.positivePrompts.includes(item)) {
      return PromptValuesEnum.POSITIVE;
    }
    if (this.negativePrompts.includes(item)) {
      return PromptValuesEnum.NEGATIVE;
    }
    return PromptValuesEnum.NONE;
  }
  search(prompts: Prompt[]): Prompt[] {
    const find = new RegExp(this.searchValue, 'i');
    return prompts.filter((it) => find.test(it.value));
  }
}
