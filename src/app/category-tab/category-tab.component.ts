import { Component, Input, OnInit } from '@angular/core';
import { Prompt } from '../shared/prompt';
import { clamp } from '../shared/utils';

@Component({
  selector: 'app-category-tab',
  templateUrl: './category-tab.component.html',
  styleUrls: ['./category-tab.component.scss']
})
export class CategoryTabComponent implements OnInit {
  @Input()
  defaultPrompts: { [group: string]: Prompt[] } = {};

  readonly promptValues = {
    POSITIVE: 'positive',
    NEGATIVE: 'negative',
    NONE: 'none'
  };

  public positivePrompts: Prompt[] = [];
  public negativePrompts: Prompt[] = [];
  defaultCategories = Object.keys(this.defaultPrompts);

  searchValue = '';

  ngOnInit() {
    this.defaultCategories = Object.keys(this.defaultPrompts);
  }

  clear(): void {
    this.negativePrompts.forEach((it) => (it.emphasis = 0));
    this.negativePrompts = [];
    this.positivePrompts.forEach((it) => (it.emphasis = 0));
    this.positivePrompts = [];
  }
  emphasise(item: Prompt, inc: number): void {
    item.emphasis = clamp(item.emphasis + inc, -3, 3);
  }
  addRemoveDefaultPrompt(item: Prompt, event: string): void {
    const pp = this.positivePrompts.findIndex((it) => it.value === item.value);
    if (pp >= 0) {
      this.positivePrompts.splice(pp, 1);
    }
    const np = this.negativePrompts.findIndex((it) => it.value === item.value);
    if (np >= 0) {
      this.negativePrompts.splice(pp, 1);
    }

    if (event === this.promptValues.POSITIVE) {
      this.positivePrompts.push(item);
    }
    if (event === this.promptValues.NEGATIVE) {
      this.negativePrompts.push(item);
    }
    if (event === this.promptValues.NONE) {
      item.emphasis = 0;
    }
  }
  getItemList(item: Prompt): string {
    if (this.positivePrompts.includes(item)) {
      return this.promptValues.POSITIVE;
    }
    if (this.negativePrompts.includes(item)) {
      return this.promptValues.NEGATIVE;
    }
    return this.promptValues.NONE;
  }
  search(prompts: Prompt[]): Prompt[] {
    const find = new RegExp(this.searchValue, 'i');
    return prompts.filter((it) => find.test(it.value));
  }
}
