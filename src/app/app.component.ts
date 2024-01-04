import { AfterContentChecked, AfterContentInit, Component, ViewChild } from '@angular/core';
import { CategoryTabComponent } from './category-tab/category-tab.component';
import {
  DEFAULT_FACE_PROMPTS,
  DEFAULT_COMPOSITION_PROMPTS,
  DEFAULT_ATTIRE_PROMPTS,
  DEFAULT_BODY_PROMPTS,
  DEFAULT_EXPRESSION_PROMPTS,
  DEFAULT_HAIR_PROMPTS
} from './shared/defaultsIndex';
import { Prompt } from './shared/prompt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentChecked, AfterContentInit {
  @ViewChild('attire', { static: true }) attire!: CategoryTabComponent;
  @ViewChild('body', { static: true }) body!: CategoryTabComponent;
  @ViewChild('composition', { static: true }) composition!: CategoryTabComponent;
  @ViewChild('expression', { static: true }) expression!: CategoryTabComponent;
  @ViewChild('face', { static: true }) face!: CategoryTabComponent;
  @ViewChild('hair', { static: true }) hair!: CategoryTabComponent;

  positivePrompts: Prompt[] = [];
  negativePrompts: Prompt[] = [];

  allPositivePrompts = () => this.positivePrompts.map((it) => it.toString()).join(', ');
  allNegativePrompts = () => this.negativePrompts.map((it) => it.toString()).join(', ');
  protected readonly DEFAULT_ATTIRE_PROMPTS = DEFAULT_ATTIRE_PROMPTS;
  protected readonly DEFAULT_BODY_PROMPTS = DEFAULT_BODY_PROMPTS;
  protected readonly DEFAULT_COMPOSITION_PROMPTS = DEFAULT_COMPOSITION_PROMPTS;
  protected readonly DEFAULT_EXPRESSION_PROMPTS = DEFAULT_EXPRESSION_PROMPTS;
  protected readonly DEFAULT_FACE_PROMPTS = DEFAULT_FACE_PROMPTS;
  protected readonly DEFAULT_HAIR_PROMPTS = DEFAULT_HAIR_PROMPTS;

  clear(): void {
    this.attire.clear();
    this.body.clear();
    this.composition.clear();
    this.expression.clear();
    this.face.clear();
    this.hair.clear();
  }

  ngAfterContentInit() {
    this.updatePrompts();
  }
  ngAfterContentChecked() {
    this.updatePrompts();
  }

  private updatePrompts(): void {
    this.positivePrompts = [
      this.attire.positivePrompts,
      this.body.positivePrompts,
      this.composition.positivePrompts,
      this.expression.positivePrompts,
      this.face.positivePrompts,
      this.hair.positivePrompts
    ].flat();
    this.negativePrompts = [
      this.attire.negativePrompts,
      this.body.negativePrompts,
      this.composition.negativePrompts,
      this.expression.negativePrompts,
      this.face.negativePrompts,
      this.hair.negativePrompts
    ].flat();
  }
}
