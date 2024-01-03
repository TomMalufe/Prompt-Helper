import { Component, Input } from '@angular/core';
import { clamp, Prompt } from '../defaultPrompts';

@Component({
  selector: 'app-category-tab',
  templateUrl: './category-tab.component.html',
  styleUrls: ['./category-tab.component.scss']
})
export class CategoryTabComponent {
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
}
