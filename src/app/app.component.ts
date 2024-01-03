import { Component, ViewChild } from '@angular/core';
import { CategoryTabComponent } from './category-tab/category-tab.component';
import { DEFAULT_COMPOSITION_PROMPTS, Prompt } from './defaultPrompts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('composition', { static: true }) composition!: CategoryTabComponent;

  positivePrompts: Prompt[] = [];
  negativePrompts: Prompt[] = [];

  allPositivePrompts = () => this.positivePrompts.map((it) => it.toString()).join(', ');
  allNegativePrompts = () => this.negativePrompts.map((it) => it.toString()).join(', ');
  protected readonly DEFAULT_COMPOSITION_PROMPTS = DEFAULT_COMPOSITION_PROMPTS;

  update(event: { positive: Prompt[]; negative: Prompt[] }): void {}
}
