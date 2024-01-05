import { AfterContentChecked, AfterContentInit, Component, Inject, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';
import { filter, first } from 'rxjs';
import { CategoryTabComponent } from './category-tab/category-tab.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { SaveDialogComponent } from './save-dialog/save-dialog.component';
import {
  DEFAULT_ATTIRE_PROMPTS,
  DEFAULT_BODY_PROMPTS,
  DEFAULT_COMPOSITION_PROMPTS,
  DEFAULT_EXPRESSION_PROMPTS,
  DEFAULT_FACE_PROMPTS,
  DEFAULT_HAIR_PROMPTS,
  DEFAULT_POSE_PROMPTS
} from './shared/defaultsIndex';
import { Prompt } from './shared/prompt';
import { PromptValuesEnum } from './shared/prompt-values-enum';
import { SavedPrompts } from './shared/saved-prompts';
import { clamp } from './shared/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  positivePrompts: Prompt[] = [];
  negativePrompts: Prompt[] = [];
  savedPrompts: SavedPrompts[] = [];
  readonly LOCAL_STORAGE_NAME = 'saved_prompts_v2';

  allPositivePrompts = () => this.positivePrompts.map((it) => it.toString()).join(', ');
  allNegativePrompts = () => this.negativePrompts.map((it) => it.toString()).join(', ');
  protected readonly DEFAULT_ATTIRE_PROMPTS = DEFAULT_ATTIRE_PROMPTS;
  protected readonly DEFAULT_BODY_PROMPTS = DEFAULT_BODY_PROMPTS;
  protected readonly DEFAULT_COMPOSITION_PROMPTS = DEFAULT_COMPOSITION_PROMPTS;
  protected readonly DEFAULT_EXPRESSION_PROMPTS = DEFAULT_EXPRESSION_PROMPTS;
  protected readonly DEFAULT_FACE_PROMPTS = DEFAULT_FACE_PROMPTS;
  protected readonly DEFAULT_HAIR_PROMPTS = DEFAULT_HAIR_PROMPTS;
  protected readonly DEFAULT_POSE_PROMPTS = DEFAULT_POSE_PROMPTS;

  constructor(public dialog: MatDialog) {
    this.getSavedPrompts();
  }

  clear(): void {
    this.negativePrompts.forEach((it) => (it.emphasis = 0));
    this.negativePrompts = [];
    this.positivePrompts.forEach((it) => (it.emphasis = 0));
    this.positivePrompts = [];
  }
  addRemovePrompt(prompt: Prompt, value: PromptValuesEnum): void {
    const pp = this.positivePrompts.findIndex((it) => it.value === prompt.value);
    if (pp >= 0) {
      this.positivePrompts.splice(pp, 1);
    }
    const np = this.negativePrompts.findIndex((it) => it.value === prompt.value);
    if (np >= 0) {
      this.negativePrompts.splice(pp, 1);
    }

    if (value === PromptValuesEnum.POSITIVE) {
      this.positivePrompts.push(prompt);
    }
    if (value === PromptValuesEnum.NEGATIVE) {
      this.negativePrompts.push(prompt);
    }
    if (value === PromptValuesEnum.NONE) {
      prompt.emphasis = 0;
    }
  }
  emphasise(item: Prompt, inc: number): void {
    item.emphasis = clamp(item.emphasis + inc, -3, 3);
  }
  save(): void {
    const dialogRef = this.dialog.open(SaveDialogComponent, {
      width: '250px'
    });

    dialogRef
      .afterClosed()
      .pipe(first(), filter(Boolean))
      .subscribe((result: string) => {
        window.localStorage.setItem(
          this.LOCAL_STORAGE_NAME,
          JSON.stringify([
            ...this.savedPrompts,
            {
              name: result,
              positive: this.positivePrompts,
              negative: this.negativePrompts
            }
          ])
        );
        this.getSavedPrompts();
      });
  }
  load(name: string, select: MatSelect): void {
    select.writeValue(null);
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data: { message: 'Are you sure? This will replace your current prompt.' }
    });

    dialogRef
      .afterClosed()
      .pipe(first(), filter(Boolean))
      .subscribe(() => {
        const stored = this.savedPrompts.find((it) => it.name === name);
        if (!stored) {
          return;
        }
        this.clear();
        this.positivePrompts = stored.positive?.map((it) => Prompt.create(it.value, it.emphasis)) || [];
        this.negativePrompts = stored.negative?.map((it) => Prompt.create(it.value, it.emphasis)) || [];
      });
  }
  deleteSavedPrompt(name: string, select: MatSelect): void {
    select.writeValue(null);
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data: { message: "Are you sure? Once it's gone, it's gone." }
    });

    dialogRef
      .afterClosed()
      .pipe(first(), filter(Boolean))
      .subscribe(() => {
        const index = this.savedPrompts.findIndex((it) => it.name === name);
        if (index < 0) {
          return;
        }
        this.savedPrompts.splice(index, 1);
        window.localStorage.setItem(this.LOCAL_STORAGE_NAME, JSON.stringify(this.savedPrompts));
      });
  }

  private getSavedPrompts(): void {
    const stored = window.localStorage.getItem(this.LOCAL_STORAGE_NAME);
    if (stored && stored.length > 0 && /positive/.test(stored)) {
      this.savedPrompts = JSON.parse(stored) as SavedPrompts[];
    } else {
      this.savedPrompts = [];
    }
  }

  protected readonly PromptValues = PromptValuesEnum;
}
